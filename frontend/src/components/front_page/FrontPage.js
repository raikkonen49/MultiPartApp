import React from 'react';
import Header from '../header/Header'; // Импортируем Header, который собирает все подкомпоненты
import PartList from '../PartList/PartList'; // Импортируем PartList
import Footer from '../footer/Footer'; // Импортируем Footer

const FrontPage = () => {
    return (
        <div>
            <Header /> {/* Используем компонент Header */}
            <main>
            <div class="row">
                <div class="col-xs-12 section-title">
                    <h2>Parts Groups</h2>
                </div>
                <div class="col-xs-12 section-slogan">
                    Buy the exact parts that fit your vehicle, online anytime!
                </div>
            </div>
                <PartList /> {/* Используем компонент PartList */}
            </main>
            <Footer /> {/* Используем компонент Footer */}
        </div>
    );
};

export default FrontPage;
