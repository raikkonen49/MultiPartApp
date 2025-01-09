import React, { useContext } from 'react';
import { CartContext } from '../cart/CartContext'; // Импортируем контекст корзины
import Top_meniu from '../header/top_meniu/Top_meniu'; // Импортируем Top_meniu

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantityInCart } = useContext(CartContext); // Получаем данные корзины и функции

    // Проверка, если корзина пуста
    if (cartItems.length === 0) {
        return (
            <div>
                <Top_meniu />

                <div className="row row-cart">
                    <div className="col-xs-12 nopad shopping-cart-title-holder">
                        <div className="col-xs-12 col-sm-6 nopad shopping-cart-title">
                            Shopping Cart
                        </div>
                        <div className="col-xs-12 col-sm-6 nopad text-right cont-shopping">
                            <a href="#">Continue Shopping</a>
                        </div>
                    </div>
                        <p>Ваша корзина пуста.</p>
                </div>
            </div>
        );
    }

    // Обработчик удаления товара
    const handleRemove = (id) => {
        removeFromCart(id); // Удаляем товар из корзины
    };

    // Обработчик изменения количества товара
    const handleQuantityChange = (id, event) => {
        const quantity = Math.max(1, parseInt(event.target.value) || 1); // Убедимся, что минимальное количество — 1
        updateQuantityInCart(id, quantity); // Обновляем количество в корзине
    };

    // Рассчитываем общую сумму
    const totalAmount = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price); // Преобразуем цену в число
        const quantity = item.quantity || 1; // Если количество не задано, ставим 1

        // Если цена или количество не являются числом, пропускаем этот товар
        if (isNaN(price) || isNaN(quantity)) {
            return total;
        }

        return total + (price * quantity); // Умножаем цену на количество
    }, 0);

    return (
        <div>
            <Top_meniu /> {/* Отображаем Top_meniu */}

            <div className="row row-cart">
                <div className="col-xs-12 nopad shopping-cart-title-holder">
                    <div className="col-xs-12 col-sm-6 nopad shopping-cart-title">
                        Shopping Cart
                    </div>
                    <div className="col-xs-12 col-sm-6 nopad text-right cont-shopping">
                        <a href="#">Continue Shopping</a>
                    </div>
                </div>
                <form className="col-xs-12 nopad" action="" method="" style={{ outline: 'none', boxShadow: 'none' }}>
                    <div className="col-xs-12 nopad shopping-cart-container">
                        <div className="col-xs-12 nopad shopping-cart-section-title">
                            <div className="col-xs-6 nopad">Item</div>
                            <div className="col-xs-3 nopad">Quantity</div>
                            <div className="col-xs-3 nopad shopping-cart-section-price">Price</div>
                        </div>

                        {cartItems.map(item => (
                            <div key={item.id} className="col-xs-12 nopad shopping-cart-block">
                                <div className="col-xs-12 col-sm-6 nopad shopping-cart-item-info">
                                    <div className="col-xs-12 col-sm-4 nopad shopping-cart-item-info-img">
                                        <img src={item.image_url} alt={item.name} className="cart-item-image" />
                                    </div>
                                    <div className="col-xs-12 col-sm-8 nopad shopping-cart-item-info-title">
                                        <span>{item.name}</span>
                                        Part number: <strong>{item.partNumber}</strong><br />
                                        Stock ID: <strong>{item.stockId}</strong>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3 nopad shopping-cart-quantity">
                                    <input
                                        type="number"
                                        value={item.quantity || 1}
                                        onChange={(e) => handleQuantityChange(item.id, e)}
                                        style={{ outline: 'none', boxShadow: 'none' }}
                                    />
                                    <span>In Stock</span>
                                </div>
                                <div className="col-xs-12 col-sm-2 nopad text-right shopping-cart-price">
                                    {(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)} €
                                </div>
                                <div className="col-xs-12 col-sm-1 nopad shopping-cart-close">
                                    <span onClick={() => handleRemove(item.id)}></span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-xs-12 nopad shopping-cart-total-price-container">
                        <div className="shopping-cart-total-price-block">
                            <div className="col-xs-12 nopad shopping-cart-total-price">
                                <div className="col-xs-6 nopad shopping-cart-total-price-text">Total</div>
                                <div className="col-xs-6 text-right nopad shopping-cart-total-price-number">
                                    {totalAmount.toFixed(2)} €
                                </div>
                            </div>
                            <div className="col-xs-12 nopad text-right shopping-cart-discount">
                                Have a discount code?
                            </div>
                            <div className="col-xs-12 nopad">
                                <button className="btn" type="submit" style={{ outline: 'none', boxShadow: 'none' }}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="col-xs-12 shopping-cart-bottom-info">
                    <div className="col-xs-12 col-md-4 nopad text-center">
                        <div className="col-xs-12 shopping-cart-bottom-info-title">Payment Types</div>
                        <div className="col-xs-12 nopad payment-list">
                            <ul>
                                <li><img src="/assets/img/paypal-white.png" alt="Paypal" /></li>
                                <li><img src="/assets/img/master-white.png" alt="MasterCard" /></li>
                                <li><img src="/assets/img/maestro-white.png" alt="Maestro" /></li>
                                <li><img src="/assets/img/visa-white.png" alt="Visa" /></li>
                                <li><img src="/assets/img/money-white.png" alt="Cash" /></li>
                                <li><img src="/assets/img/cash-white.png" alt="Cash" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4 nopad text-center">
                        <div className="col-xs-12 nopad shopping-cart-bottom-info-title">Secure Shopping</div>
                        <div className="col-xs-12 nopad shopping-cart-bottom-info-text">
                            Secured SSL Certificate by <a href="#"><img src="/assets/img/comodo-1.png" alt="Comodo SSL" /></a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4 nopad text-center">
                        <div className="col-xs-12 nopad shopping-cart-bottom-info-title">Need Help?</div>
                        <div className="col-xs-12 nopad shopping-cart-bottom-info-text">
                            <a href="#">Chat Now</a> or call +63-2-1234567
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
