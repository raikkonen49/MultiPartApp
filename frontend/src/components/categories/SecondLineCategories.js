import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TopMenu from '../header/top_meniu/TopMenu';
import { Link } from 'react-router-dom';

const SecondLineCategories = () => {
    const { id } = useParams(); // Получаем id из параметров маршрута
    const [secondLineCategories, setSecondLineCategories] = useState([]);
    const [category, setCategory] = useState(null); // Состояние для родительской категории
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            console.log(id); // Проверяем значение id
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/categories/second_line_categories/?root_category_id=${id}`);
                setSecondLineCategories(response.data);

                // Запрос для получения родительской категории
                const parentCategoryResponse = await axios.get(`http://127.0.0.1:8000/api/categories/${id}/`); // Измените путь, если нужно
                setCategory(parentCategoryResponse.data);
            } catch (err) {
                setError('Ошибка при получении категорий');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [id]);

    return (
        <div>
            <TopMenu />
            <div className="row">
                <div className="col-xs-12 nopad breadcrumbs">
                    <ul>
                        <li><a href="#" title="">Home</a></li>
                        <li><a href="#" title="">Audi</a></li>
                        <li><a href="#" title="">A6 C7 Allroad (4G)</a></li>
                        <li><a href="#" title="">3.0 TDI quattro (320 Hp) (from 2012)</a></li>
                        <li><a href="#" title="">Vechicle electrical system</a></li>
                        <li><a href="#" title="">Engine control unit</a></li>
                        <li>7 500 255</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 nopad page-title">
                    <h1>{category ? category.name : 'Загрузка...'}</h1> {/* Отображаем название категории */}
                </div>
                <div className="col-xs-12 nopad page-category">
                    For Audi A6 (C7) Allroad 3.0 TDI quattro from 2012
                </div>
                <div className="col-xs-12 nopad category-search-block-wrap">
                    <div className="col-xs-12 nopad category-search-block">
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 nopad category-search-title">
                            Select Part Group Below or Search by Part Name
                        </div>
                        <form className="col-xs-12 col-sm-12 col-md-5 col-lg-6 nopad category-search-input" action="" method="">
                            <input type="text" name="" value="" placeholder="Part name" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="row row-parts-category">
                <div className="col-xs-12 nopad category-list-holder">
                    <div className="col-xs-12 nopad category-list">
                        <ul>
                            {secondLineCategories.map(category => (
                                <li key={category.id}>
                                    <Link to={`/categories/${category.id}`} title={category.name}>
                                        <div className="col-xs-12 nopad category-image">
                                            <span>
                                                <img src={category.image_url} alt={category.name} title={category.name} />
                                            </span>
                                        </div>
                                        <div className="col-xs-12 nopad category-title">
                                            <span>
                                                <h2>{category.name}</h2>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondLineCategories;
