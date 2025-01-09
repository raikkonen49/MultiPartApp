import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAuthToken } from '../../utils/axiosInstance';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Обработчик изменения полей ввода
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Отправка данных на сервер:', credentials);

            const response = await axios.post('http://127.0.0.1:8000/api/token/', credentials);

            console.log('Ответ от сервера:', response);

            if (response.status === 200) {
                const { access, refresh } = response.data;

                // Логируем токены в консоль
                console.log('Access Token:', access);
                console.log('Refresh Token:', refresh);

                // Сохраняем токены в localStorage
                localStorage.setItem('access', access);
                localStorage.setItem('refresh', refresh);

                // Устанавливаем токен для дальнейших запросов
                setAuthToken(access);

                // Перенаправляем на главную страницу после успешной авторизации
                navigate('/');
            } else {
                setError('Неверное имя пользователя или пароль.');
            }
        } catch (err) {
            console.error('Ошибка при аутентификации:', err);
            setError('Ошибка подключения к серверу.');
        }
    };

    return (
        <div className="row row-register">
            <div className="col-xs-12 text-center page-logo">
                <a href="#"><img src="/assets/img/logo-black.png" alt="Logo" /></a>
            </div>
            <div className="col-xs-12 nopad sign-container">
                <form onSubmit={handleSubmit} className="col-xs-12 sign-block" style={{ outline: 'none', boxShadow: 'none' }}>
                    <div className="col-xs-12 nopad sign-title">
                        Sign In
                    </div>
                    <div className="col-xs-12 nopad sign-input">
                        <input
                            style={{ outline: 'none', boxShadow: 'none' }}
                            type="text"
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                            placeholder="Username"
                        />
                    </div>
                    <div className="col-xs-12 nopad sign-input">
                        <input
                            style={{ outline: 'none', boxShadow: 'none' }}
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                            placeholder="Password"
                        />
                    </div>
                    <div className="col-xs-12 nopad text-right under-input">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="col-xs-12 nopad sign-in-btn">
                        <button className="btn" type="submit">Sign In</button>
                        <span>Or</span>
                    </div>
                    <div className="col-xs-12 nopad facebook-btn">
                        <a className="btn" href="#">Sign In with Facebook</a>
                    </div>
                    <div className="col-xs-12 nopad text-center">
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    <div className="col-xs-12 nopad sign-message">
                        Don't have an account? <a href="#">Sing Up</a>
                    </div>
                </form>
            </div>
            <div className="col-xs-12 nopad sign-footer">
                <div className="col-xs-12 col-sm-5 nopad">
                    <span>© 2017 MultiPart. All rights reserved.</span>
                </div>
                <div className="col-xs-12 col-sm-5 nopad text-right">
                    <span>Certified Secured Shopping</span>
                </div>
                <div className="col-xs-12 col-sm-2 nopad text-right">
                    <a href="#">
                        <img src="/assets/img/comodo-1.png" alt="Comodo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
