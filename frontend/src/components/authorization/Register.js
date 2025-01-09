import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', password2: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register/', formData);
            setMessage('Регистрация успешна! Теперь войдите.');
        } catch (error) {
            setMessage('Ошибка регистрации: ' + error.response.data);
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
                        Registration
                    </div>
                    <div className="col-xs-12 nopad sign-input">
                        <input type="text" name="username" placeholder="Имя пользователя" onChange={handleChange} />
                    </div>

                    <div className="col-xs-12 nopad sign-input">
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    </div>
                    <div className="col-xs-12 nopad sign-input">
                        <input type="password" name="password" placeholder="Пароль" onChange={handleChange} />
                    </div>
                    <div className="col-xs-12 nopad sign-input">
                        <input type="password" name="password2" placeholder="Повторите пароль" onChange={handleChange} />
                    </div>
                    <div className="col-xs-12 nopad sign-in-btn">
                        <button className="btn" type="submit">Register</button>
                    </div>
                    <div className="col-xs-12 nopad text-center">
                        {message && <p>{message}</p>}
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
}

export default Register;
