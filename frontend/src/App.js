import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './components/front_page/FrontPage';
import PartList from './components/PartList/PartList';
import SecondLineCategories from './components/categories/SecondLineCategories';
import { initializeScripts } from './assets/js/custom';

const App = () => {
    useEffect(() => {
        initializeScripts();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/parts" element={<PartList />} />
                    <Route path="/categories/:id" element={<SecondLineCategories />} /> {/* Обновленный маршрут */}
                </Routes>
            </div>
        </Router>
    );
};
export default App;
