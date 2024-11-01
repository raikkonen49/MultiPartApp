import requests
from bs4 import BeautifulSoup
import psycopg2
from psycopg2 import Error
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from concurrent.futures import ThreadPoolExecutor
import time


class SimpleParser:
    def __init__(self):
        self.url = 'https://www.signeda.lt/ru/avtomobilnye-fary-ikh-chasti-c1331/protivotumannye-fary-ikh-chasti-c1367/protivotumannaya-fara-c1398'
        self.db_config = {
            'database': 'multipart',
            'user': 'postgres',
            'password': '12369',
            'host': 'localhost',
            'port': '5433'
        }
        self.driver = webdriver.Chrome()

    def get_connection(self):
        try:
            connection = psycopg2.connect(**self.db_config)
            return connection
        except Error as e:
            print(f"Ошибка соединения с БД: {e}")
            return None

    def get_category_id(self, connection, name, parent_id):
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT id FROM "MultiApp_category"
                WHERE name = %s AND parent_id IS NOT DISTINCT FROM %s
                """,
                (name, parent_id)
            )
            result = cursor.fetchone()
            return result[0] if result else None

    def insert_category(self, connection, name, parent_id=None):
        """Вставляет категорию в БД, если она еще не существует"""
        category_id = self.get_category_id(connection, name, parent_id)
        if category_id:
            return category_id  # Категория уже существует, возвращаем ее ID

        with connection.cursor() as cursor:
            try:
                cursor.execute(
                    """
                    INSERT INTO "MultiApp_category" (name, parent_id)
                    VALUES (%s, %s)
                    RETURNING id
                    """,
                    (name, parent_id)
                )
                connection.commit()
                return cursor.fetchone()[0]
            except Exception as e:
                print(f"Ошибка вставки категории: {e}")
                return None

    def get_breadcrumbs_from_main_page(self):
        """Собирает все полные крошки со страницы списка товаров"""
        self.driver.get(self.url)
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '.signeda-breadcrumb.w-100.d-flex'))
        )

        html_content = self.driver.page_source
        soup = BeautifulSoup(html_content, 'html.parser')
        breadcrumbs_container = soup.select_one('.signeda-breadcrumb.w-100.d-flex')

        if soup.select_one('.signeda-breadcrumb.w-100.d-flex.flex-wrap.flex-sm-nowrap'):
            raise ValueError("Ошибка: Обнаружены неполные крошки на странице товара.")

        breadcrumbs = breadcrumbs_container.select('li span') if breadcrumbs_container else []
        categories = [breadcrumb.get_text(strip=True) for breadcrumb in breadcrumbs if breadcrumb.get_text(strip=True)]

        return categories

    def get_or_create_category_from_breadcrumbs(self, connection, breadcrumbs):
        """Создает иерархию категорий на основе крошек и возвращает ID самой последней категории."""
        parent_id = None  # Начинаем с корневого уровня

        for category_name in breadcrumbs:
            if category_name:
                category_id = self.insert_category(connection, category_name, parent_id)
                parent_id = category_id  # Обновляем parent_id для следующего уровня

        return parent_id  # Возвращаем ID самой последней категории

    def insert_part_with_category(self, connection, name, description, category_id, price=None, image_url=None):
        """Вставляет товар с привязкой к категории, ценой и ссылкой на изображение"""
        with connection.cursor() as cursor:
            try:
                cursor.execute(
                    """
                    INSERT INTO "MultiApp_part" (name, description, category_id, price, image_url, created_at)
                    VALUES (%s, %s, %s, %s, %s, CURRENT_TIMESTAMP)
                    RETURNING id
                    """,
                    (name, description, category_id, price, image_url)
                )
                connection.commit()
                return cursor.fetchone()[0]
            except Exception as e:
                print(f"Ошибка вставки данных: {e}")
                return None

    def insert_part_field_value(self, connection, part_id, field_name, field_value):
        """Вставляет данные в MultiApp_partfieldvalue"""
        with connection.cursor() as cursor:
            try:
                cursor.execute(
                    """
                    INSERT INTO "MultiApp_partfieldvalue" (part_id, field_name, field_value)
                    VALUES (%s, %s, %s)
                    """,
                    (part_id, field_name, field_value)
                )
                connection.commit()
            except Exception as e:
                print(f"Ошибка вставки характеристик: {e}")

    def get_image_url(self, soup):
        """Извлекает первую ссылку на изображение из блока .owl-item"""
        image_div = soup.select_one('.owl-item.active.center a')
        if image_div:
            image_url = image_div.get('href')
            return image_url
        return None

    def get_part_details(self, link):
        """Получает описание, характеристики, цену и ссылку на изображение товара по ссылке"""
        self.driver.get(link)
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '.product-data__product-description__content'))
        )

        html_content = self.driver.page_source
        soup = BeautifulSoup(html_content, 'html.parser')

        # Описание
        description = soup.select_one('.product-data__product-description__content')
        description_text = description.get_text(strip=True) if description else 'Описание не найдено'

        # Характеристики
        details_table = soup.select_one('.details-table.w-100')
        field_values = []
        if details_table:
            rows = details_table.find_all('tr')
            for row in rows:
                cells = row.find_all('td')
                if len(cells) == 2:
                    field_name = cells[0].get_text(strip=True)
                    field_value = cells[1].get_text(strip=True)
                    field_values.append((field_name, field_value))

        # Цена
        price_element = soup.select_one('.price.d-flex.flex-column')
        price = ""
        if price_element:
            price_spans = price_element.find_all('span')
            for span in price_spans:
                if 'sale-badge' not in span.get('class', []):
                    if '€' in span.get_text():
                        if not span.find('span', class_='sale-badge'):
                            price = span.get_text(strip=True).split()[0]
                            break

        # Ссылка на изображение
        image_url = self.get_image_url(soup)

        return description_text, field_values, price, image_url

    def get_part_names_and_links(self):
        self.driver.get(self.url)
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '.latest-product-code a'))
        )

        html_content = self.driver.page_source
        soup = BeautifulSoup(html_content, 'html.parser')
        links = soup.select('.latest-product-code a')
        part_data = []

        for link in links:
            name = link.get_text(strip=True)
            href = link.get('href', '')
            if href.startswith('/'):
                href = f"https://www.signeda.lt{href}"
            part_data.append((name, href))

        return part_data

    def run(self):
        connection = self.get_connection()
        if connection:
            try:
                # Получаем категории с главной страницы
                main_page_categories = self.get_breadcrumbs_from_main_page()
                # Создаем категории и получаем ID последней
                leaf_category_id = self.get_or_create_category_from_breadcrumbs(connection, main_page_categories)

                # Получаем данные о товарах
                part_data = self.get_part_names_and_links()

                with ThreadPoolExecutor(max_workers=5) as executor:
                    results = executor.map(lambda p: (p[0], *self.get_part_details(p[1])), part_data)
                    for name, description, field_values, price, image_url in results:
                        # Вставляем товар с категорией, ценой и ссылкой на изображение
                        part_id = self.insert_part_with_category(connection, name, description, leaf_category_id, price, image_url)
                        if part_id:
                            for field_name, field_value in field_values:
                                self.insert_part_field_value(connection, part_id, field_name, field_value)

            except ValueError as e:
                print(e)
            finally:
                connection.close()
                self.driver.quit()
                print("Парсинг завершен.")


if __name__ == "__main__":
    parser = SimpleParser()
    parser.run()
