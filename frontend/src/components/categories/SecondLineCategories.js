import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Top_meniu from '../header/top_meniu/Top_meniu';

const SecondLineCategories = () => {
    const { id } = useParams(); // Получаем id из параметров маршрута
    const [category, setCategory] = useState(null); // Состояние для родительской категории
    const [secondLineCategories, setSecondLineCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            setError(null);

            if (!id) {
                setError('ID категории не найдено.');
                setLoading(false);
                return;
            }

            try {
                // Запрос для получения родительской категории и ее подкатегорий
                const response = await axios.get(`http://127.0.0.1:8000/api/categories/${id}/`);
                if (response.data) {
                    setCategory(response.data);
                    // Загружаем все подкатегории, которые вложены в эту категорию
                    setSecondLineCategories(response.data.subcategories);
                } else {
                    setError('Родительская категория не найдена');
                }
            } catch (err) {
                setError('Ошибка при получении категории');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [id]);

    // Формируем крошки
    const generateBreadcrumbs = () => {
        const breadcrumbs = [
            <li key="home"><Link to="/" title="Home">Home</Link></li>,
            category && <li key={category.id}><Link to={`/categories/${category.id}`} title={category.name}>{category.name}</Link></li>
        ];

        return breadcrumbs;
    };

    // Обработчик клика на категорию
    const handleCategoryClick = (subCategory) => {
        console.log('Категория нажатая:', subCategory);

        // Переход к подкатегориям, если они есть
        if (subCategory.subcategories && subCategory.subcategories.length > 0) {
            navigate(`/categories/${subCategory.id}`);
        } else {
            // Если дочерних категорий нет, показываем товары
            navigate(`/parts/${subCategory.id}`);
        }
    };

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Top_meniu />
            <div className="row">
                <div className="col-xs-12 nopad breadcrumbs">
                    <ul>
                        {generateBreadcrumbs()}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 nopad page-title">
                    <h1>{category?.name || 'Загрузка...'}</h1>
                </div>
                <div className="col-xs-12 nopad page-category">
                    {/* Здесь можно заменить статический текст на динамический */}
                    For Audi A6 (C7) Allroad 3.0 TDI quattro from 2012
                </div>
            </div>
            <div className="row row-parts-category">
                <div className="col-xs-12 nopad category-list-holder">
                    <div className="col-xs-12 nopad category-list">
                        {secondLineCategories.length > 0 ? (
                            <ul>
                                {secondLineCategories.map((subCategory) => (
                                    <li key={subCategory.id}>
                                        <div onClick={() => handleCategoryClick(subCategory)} style={{ cursor: 'pointer' }}>
                                            <div className="col-xs-12 nopad category-image">
                                                <span>
                                                    <img
                                                        src={subCategory.image_url || '/path/to/default_image.jpg'}
                                                        alt={subCategory.name}
                                                        title={subCategory.name}
                                                    />
                                                </span>
                                            </div>
                                            <div className="col-xs-12 nopad category-title">
                                                <span>
                                                    <h2>{subCategory.name}</h2>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Подкатегории отсутствуют</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondLineCategories;
