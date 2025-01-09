import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const refreshToken = localStorage.getItem('refresh');
        try {
            await axios.post('http://127.0.0.1:8000/logout/', { refresh: refreshToken });
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            navigate('/login');
        } catch (error) {
            console.error('Ошибка при выходе', error);
        }
    };

    return <button onClick={handleLogout}>Выйти</button>;
}

export default Logout;
