// axiosInstance.js
import axios from 'axios';

// Функция для установки токена в заголовок авторизации
export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

// Создание экземпляра axios с базовым URL
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', // базовый URL вашего API
    timeout: 10000,  // Устанавливаем тайм-аут в 10 секунд
});

export default api;
