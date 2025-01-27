import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Импортируем Link

const PartList = () => {
    const [parts, setParts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Запрос для получения списка деталей
        axios.get('http://127.0.0.1:8000/api/parts/')
            .then(response => setParts(response.data))
            .catch(error => console.error('Ошибка при получении данных: ', error));

        // Запрос для получения категорий первой линии
        axios.get('http://127.0.0.1:8000/api/categories/root_categories/')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Ошибка при получении категорий: ', error));
    }, []);

    return (
        <React.Fragment>
            <div className="row row-parts-category">
                <div className="col-xs-12 nopad category-list-holder">
                    <div className="col-xs-12 nopad category-list">
                        <ul>
                            {categories.map(category => (
                                <li key={category.id}>
                                    {/* Обновлено на Link для перехода по динамическому маршруту */}
                                    <Link to={`/categories/${category.id}`} title={category.name}>
                                        <div className="col-xs-12 nopad category-image">
                                            <span>
                                                {/* Используем URL изображения из API */}
                                                <img src={category.image_url} alt={category.name} title={category.name} />
                                            </span>
                                        </div>
                                        <div className="col-xs-12 nopad category-title">
                                            <span>
                                                <h2>{category.name}</h2>
                                            </span>
                                        </div>
                                        <div className="col-xs-12 nopad about-category">
                                            Exhaust Manifold, Catalyst, Exhaust pipe, Tail Pipe, EGR Valve, Lambda Probe & more
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h2>Список деталей</h2>
                <ul>
                    {parts.map(part => (
                        <li key={part.id}>
                            {part.name} - {part.description}
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default PartList;
