import React from 'react';
import Header from '../header/Header'; // Импортируем Header, который собирает все подкомпоненты
import CatList from '../categories/CatList'; // Импортируем CatList
import Footer from '../footer/Footer'; // Импортируем Footer

const FrontPage = () => {
    return (
        <div>
            <Header /> {/* Используем компонент Header */}
            <main>
            <div className="row">
                <div className="col-xs-12 section-title">
                    <h2>Parts Groups</h2>
                </div>
                <div className="col-xs-12 section-slogan">
                    Buy the exact parts that fit your vehicle, online anytime!
                </div>
            </div>
                <CatList /> {/* Используем компонент CatList */}
            </main>
            <Footer /> {/* Используем компонент Footer */}
        </div>
    );
};

export default FrontPage;
