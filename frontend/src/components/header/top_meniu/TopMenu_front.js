import React, { useState, useMemo, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Импортируем Link для маршрутизации
import axios from 'axios';  // Убедитесь, что axios импортирован
import { CartContext } from '../../cart/CartContext'; // Путь относительно текущей директории

// Функция для получения токена
const getToken = () => localStorage.getItem('access'); // Замените на правильное имя токена, если оно другое

const TopMenu_front = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentUser, setCurrentUser] = useState(null);  // Изначально нет данных о пользователе
  const navigate = useNavigate();

  // Мемоизация имени пользователя
  const currentUsername = useMemo(() => {
    return currentUser?.username || '';  // Если currentUser или его свойство username отсутствуют, возвращаем пустую строку
  }, [currentUser]);

  // Обновление currentUser при изменении данных в localStorage
  useEffect(() => {
    const token = getToken();

    // Логируем токен для отладки

    if (token) {
      axios.get('http://127.0.0.1:8000/api/user/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setCurrentUser(response.data); // Устанавливаем данные пользователя в состояние
      })
      .catch(error => {
        if (error.response) {
          console.error('Server responded with error:', error.response.status);
        } else {
          console.error('Error fetching user data:', error.message);
        }
        setCurrentUser(null); // Если ошибка, сбрасываем данные пользователя
      });
    }
  }, []); // Пустой массив зависимостей, чтобы эффект сработал только один раз при монтировании компонента

  // Логика выхода
  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user');  // Удаляем данные пользователя при выходе
    setCurrentUser(null);
    navigate('/');
  };

  // Проверка аутентификации
  const isAuthenticated = () => !!localStorage.getItem('access');

  // Обработчик изменения поиска
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const { totalQuantity } = useContext(CartContext); // Получаем totalQuantity из контекста
  return (
    <div className="col-xs-12 header hold" id="top">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 nopad header-left">
        <div className="trigger">
          <span></span>
        </div>
        <div className="logo">
          <Link to="/" title="">
            <img src="/assets/img/logo.png" alt="Logo" />
          </Link>
          <span>Philippines</span>
        </div>

        <div className="nav">
          <ul>
            <li>
              <a href="#" title="">
                About Us
              </a>
              <ul>
                <li>
                  <a href="#" title="">About Multipart</a>
                </li>
                <li>
                  <a href="#" title="">Warranty</a>
                </li>
                <li>
                  <a href="#" title="">Delivery</a>
                </li>
                <li>
                  <a href="#" title="">FAQs</a>
                </li>
                <li>
                  <a href="#" title="">Customer Support</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" title="">
                Parts Request
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-push-4 nopad header-info-block">
        <ul>
          <li>
            <a className="phone" href="tel:+6321234567">
              <span>+63 2 1234567</span>
            </a>
          </li>
          <li>
            <a className="account" href="#" title="">
              <span>My Account</span>
            </a>
            <div className="account-dropdown">
              <div className="col-xs-12 nopad dropdown-title">
                My Account
              </div>
              {!isAuthenticated() ? (
                <>
                <div className="col-xs-12 nopad dropdown-bth-holder">
                  <Link className="dropdown-bth" to="/login">Login</Link>
                </div>
                <div className="col-xs-12 nopad dropdown-register">
                  New Customer? <Link to="/register">Register</Link>
                </div>
              </>
            ) : (
              <>
                <div className="col-xs-12 nopad dropdown-bth-holder">
                  <span>Welcome, {currentUsername}!</span>
                </div>
                <div className="col-xs-12 nopad dropdown-register">
                  <button onClick={handleLogout}>Logout</button> {/* Исправлено на handleLogout */}
                </div>
                </>
              )}
            </div>
          </li>
          <li>
            <a className="wish" href="#" title="">
              <span>Wish List</span>
            </a>
          </li>
          <li>
              <Link className="cart" to="/cart" title="Shopping Cart">
                  <span>Shopping Cart</span>
                  <div className="wish-ball">
                    <span className="wish-number">{totalQuantity}</span>
                  </div>
             </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu_front;
