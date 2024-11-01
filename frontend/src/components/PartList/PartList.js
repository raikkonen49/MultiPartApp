import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Top_meniu from '../header/top_meniu/Top_meniu';
import PartCard from '../Part_Inner/Part_inner';

const PartsList = () => {
    const { categoryId } = useParams(); // Получаем ID категории из URL
    const [parts, setParts] = useState([]);
    const [category, setCategory] = useState(null); // Состояние для категории
    const [secondLineCategories, setSecondLineCategories] = useState([]); // Состояние для подкатегорий
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchParts = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/parts/?category_id=${categoryId}`);
                setParts(response.data);
            } catch (err) {
                setError('Ошибка при получении товаров');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchCategory = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/categories/${categoryId}/`);
                setCategory(response.data);

                // Если подкатегории есть, сохраняем их
                setSecondLineCategories(response.data.subcategories || []);
            } catch (err) {
                setError('Ошибка при получении категории');
                console.error(err);
            }
        };

        fetchCategory();
        fetchParts();
    }, [categoryId]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    // Формируем крошки
    const generateBreadcrumbs = () => {
        const breadcrumbs = [
            <li key="home"><Link to="/" title="Home">Home</Link></li>,
            category && <li key={category.id}><Link to={`/categories/${category.id}`} title={category.name}>{category.name}</Link></li>
        ];

        // Добавляем подкатегории в крошки
        secondLineCategories.forEach((subCategory, index) => {
            breadcrumbs.push(
                <li key={subCategory.id}>
                    {index === secondLineCategories.length - 1 ? (
                        <span>{subCategory.name}</span> // Последняя подкатегория без ссылки
                    ) : (
                        <Link to={`/categories/${subCategory.id}`} title={subCategory.name}>{subCategory.name}</Link>
                    )}
                </li>
            );
        });

        return breadcrumbs;
    };

    return (
        <div>
            <div>
                <Top_meniu />
            </div>
            <div className="row">
                <div className="col-xs-12 nopad breadcrumbs">
                    <div className="row">
                        <div className="col-xs-12 nopad breadcrumbs">
                            <ul>
                                {generateBreadcrumbs()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 nopad all-parts-title-wrap">
                    <div className="col-xs-12 nopad page-title">
                        Engine control units <span className="found-parts">(256 parts found)</span>
                    </div>
                    <div className="col-xs-12 nopad page-category">
                        For Audi A6 (C7) Allroad 3.0 TDI quattro from 2012
                        <div className="sort">
                            Sort by: <span>Newest</span>
                            <ul>
                                <li>
                                    <Link to="#" title="">Popular</Link>
                                </li>
                                <li>
                                    <Link to="#" title="">Newest</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 nopad parts-list-container hold filters">
                    <ul>
                        <li>
                            <div className="col-xs-12 nopad vehicle-parts-list-block">
                                <div className="col-xs-12 nopad parts-item stock hold">
                                    <ul>
                                        {parts.map(part => (
                                            <li key={part.id}>
                                                <div className="col-xs-12 nopad parts-image">
                                                    <span>
                                                        {part.image_url ? (<img src={part.image_url} alt={part.name} />) : (<p>Изображение отсутствует</p>)}
                                                    </span>
                                                </div>
                                                <div className="col-xs-12 nopad parts-title">
                                                    <h2>{part.name}</h2>
                                                </div>
                                                <div className="col-xs-12 nopad parts-info-wrap">
                                                    <div className="col-xs-12 nopad parts-info">
                                                        {part.description}
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 nopad parts-price">
                                                    {part.price}
                                                </div>
                                                <div className="parts-details">
                                                    <Link to={`/part/${part.id}`} title="View details">
                                                        View details
                                                    </Link>
                                                </div>
                                                <div className="part-favorite visible"></div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 nopad pagination text-center">
                                <ul className="page-numbers">
                                    <li>
                                        <Link to="#" className="prev" title=""></Link>
                                    </li>
                                    <li>
                                        <Link to="#" title="">2</Link>
                                    </li>
                                    <li>
                                        <Link to="#" title="">3</Link>
                                    </li>
                                    <li>
                                        <span className="current">4</span>
                                    </li>
                                    <li>
                                        <Link to="#" title="">5</Link>
                                    </li>
                                    <li>
                                        <Link to="#" title="">6</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="next" title=""/>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PartsList;
