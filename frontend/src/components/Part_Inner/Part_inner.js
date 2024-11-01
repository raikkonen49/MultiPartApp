// PartCard.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Top_meniu from '../header/top_meniu/Top_meniu';

const PartCard = () => {
    const { id } = useParams(); // Получаем ID товара из URL
    const [part, setPart] = useState(null);
    const [fieldValues, setFieldValues] = useState([]); // Для хранения дополнительных полей
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPart = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/parts/${id}/`);
                setPart(response.data);
                setFieldValues(response.data.field_values || []); // Получаем и сохраняем дополнительные поля
            } catch (err) {
                setError('Ошибка при получении товара');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPart();
    }, [id]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div>
                <Top_meniu />
            </div>
            {part && (
                <div className="row row-order">
                    <div className="col-xs-12 nopad parts-order-wrap">
                        <div className="col-xs-12 col-sm-12 col-md-6 nopad parts-order-slider-block">
                            {part.image_url ? (
                                <img src={part.image_url} alt={part.name} />
                            ) : (
                                <p>Изображение отсутствует</p>
                            )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 nopad parts-order-block">
                            <div className="col-xs-12 nopad part-number">
                                Part number: <strong>{part.part_number}</strong> {/* предполагаем, что part_number есть в ответе */}
                                <div className="print-share">
                                    <span className="print">
                                        <a href="javascript:window.print()"></a>
                                    </span>
                                    <span className="share">
                                        <div className="share-wrap">
                                            <div className="col-xs-12 nopad share-block">
                                                <div className="col-xs-12 nopad share-social">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="img/s-facebook.png" alt="" title=""/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="img/s-mail.png" alt="" title=""/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="img/s-twitter.png" alt="" title=""/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="img/s-google.png" alt="" title=""/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-xs-12 nopad share-link">
                                                    www.multipart.ph/product
                                                </div>
                                                <div className="col-xs-12 nopad share-copy">
                                                    <span>Copy</span>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-12 nopad parts-order-section">
                                <div className="col-xs-12 nopad parts-order-price">
                                    {part.price}
                                </div>
                                <div className="col-xs-12 nopad parts-order-functions">
                                    <a className="btn" data-toggle="modal" data-target="#popup-1" href="#" title="">Add to Cart</a>
                                    <a className="btn wish" href="#" title="">Add to Wish List</a>
                                </div>
                            </div>
                            <div className="col-xs-12 in-stock-block hold">
                                <div className="col-xs-12 col-lg-6 nopad in-stock left">
                                    <span>In Stock.</span> Usually dispatched in 1 business day
                                </div>
                                <div className="col-xs-12 col-lg-6 nopad in-stock right">
                                    Front Bumper Set includes: <a href="#inclides">View Parts</a>
                                </div>
                            </div>
                            <div className="col-xs-12 nopad parts-order-question-block">
                                <div className="col-xs-12 nopad parts-order-question">
                                    Have a question? <a className="down" href="#message">Fill a Form</a>, <a href="#message">Chat Now</a> or call +63-2-1234567
                                </div>
                                <div className="col-xs-12 nopad parts-order-delivery">
                                    Delivery options:
                                    <span className="delivery">
                                        Standard Delivery
                                        <div className="info-dropdown-wrap">
                                            <div className="col-xs-12 info-dropdown">
                                                Delivery price depends by the type and weight of items in your basket. With Standard Delivery, your order will be delivered in 2-5 business days after dispatch.
                                                <br/>
                                                <br/>
                                                Cash on Delivery available
                                            </div>
                                        </div>
                                    </span>
                                     or <span className="pickup">
                                         Store Pickup
                                         <div className="info-dropdown-wrap">
                                             <div className="col-xs-12 info-dropdown">
                                                 Delivery price depends by the type and weight of items in your basket. With Standard Delivery, your order will be delivered in 2-5 business days after dispatch.
                                                 <br/>
                                                 <br/>
                                                 Cash on Delivery available
                                             </div>
                                         </div>
                                     </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 nopad parts-info-wrap">
                        <div className="col-xs-12 col-sm-12 col-md-6 nopad part-information-block">
                            <div className="col-xs-12 nopad parts-information-holder">
                                <div className="col-xs-12 nopad parts-technical-data-title">
                                    <h2>Характеристики</h2>
                                </div>
                                <div className="col-xs-12 nopad parts-technical-data-info">
                                    <ul>
                                        {fieldValues.map((fieldValue, index) => (
                                            <li key={index}>
                                                <div className="col-xs-6 nopadleft">
                                                    <span>{fieldValue.field_name}</span>
                                                </div>
                                                <div className="col-xs-6 nopad">
                                                    <strong>{fieldValue.field_value}</strong>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 nopad vehicle-information-block">
                            <div className="col-xs-12 nopad parts-information-holder">
                                <div className="col-xs-12 nopad parts-technical-data-title">
                                    <h2>Описание</h2>
                                </div>
                                <div className="col-xs-12 nopad parts-technical-data-info">
                                    <div className="col-xs-12 nopad">
                                        {part.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PartCard;
