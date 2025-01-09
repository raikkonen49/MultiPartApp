import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './components/front_page/FrontPage';
import CatList from './components/categories/CatList';
import SecondLineCategories from './components/categories/SecondLineCategories';
import PartsList from './components/PartList/PartList';
import PartCard from './components/Part_Inner/Part_inner'; // Обновленный путь к PartCard
import Register from './components/authorization/Register';
import Login from './components/authorization/Login';
import Logout from './components/authorization/Logout';
import PrivateRoute from './utils/PrivateRoute'; // Для защиты маршрутов
import Cart from './components/cart/Cart'; // Импортируем компонент корзины
import { CartProvider } from './components/cart/CartContext'; // Импортируем провайдер корзины

const App = () => {
    return (
        <CartProvider> {/* Оборачиваем приложение в CartProvider */}
            <Router>
                <div className="App">
                    <Routes>
                        {/* Публичные страницы */}
                        <Route path="/" element={<FrontPage />} />
                        <Route path="/parts" element={<CatList />} />
                        <Route path="/categories/:id" element={<SecondLineCategories />} />
                        <Route path="/parts/:categoryId" element={<PartsList />} />
                        <Route path="/part/:id" element={<PartCard />} /> {/* Страница деталей товара */}

                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />

                        {/* Защищенные маршруты */}
                        <Route element={<PrivateRoute />}>
                            <Route path="/profile" element={<div>Защищенная страница профиля</div>} />
                        </Route>

                        {/* Страница корзины */}
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
