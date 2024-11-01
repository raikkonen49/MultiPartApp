from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, PartViewSet, part_detail

# Создаем роутер для API
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'parts', PartViewSet)

# Определяем URL-паттерны
urlpatterns = [
    path('', include(router.urls)),  # Включаем маршруты для API через роутер
    path('part/<int:part_id>/', part_detail, name='part_detail'),  # Маршрут для обычного представления (детали товара)

    # Маршруты для корневых категорий и категорий второй линии с фильтрацией
    path('categories/root_categories/', CategoryViewSet.as_view({'get': 'root_categories'}), name='root_categories'),
    path('categories/second_line_categories/', CategoryViewSet.as_view({'get': 'second_line_categories'}), name='second_line_categories'),

    # Новый маршрут для подкатегорий
    path('categories/<int:pk>/subcategories/', CategoryViewSet.as_view({'get': 'subcategories'}), name='subcategories'),

    # Новый маршрут для фильтрации товаров по категории
    path('parts/filter_by_category/', PartViewSet.as_view({'get': 'filter_by_category'}), name='filter_by_category'),
]
