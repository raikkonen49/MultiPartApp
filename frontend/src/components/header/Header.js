// frontend/src/components/header/Header.js
import React from 'react';
import HeaderSearch from './header_search/HeaderSearch'; // Импортируем HeaderSearch
import TopMenu from './top_meniu/TopMenu'; // Импортируем TopMenu

const Header = () => {
    return (
        <header>
            <TopMenu /> {/* Используем TopMenu */}
            <HeaderSearch /> {/* Используем HeaderSearch */}
        </header>
    );
};

export default Header;
