import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './components/front_page/FrontPage';
import CatList from './components/categories/CatList';
import SecondLineCategories from './components/categories/SecondLineCategories';
import PartsList from './components/PartList/PartList';
import PartCard from './components/Part_Inner/Part_inner'; // Обновленный путь к PartCard

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/parts" element={<CatList />} />
                    <Route path="/categories/:id" element={<SecondLineCategories />} />
                    <Route path="/parts/:categoryId" element={<PartsList />} />
                    <Route path="/part/:id" element={<PartCard />} />  {/* Страница деталей товара */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
