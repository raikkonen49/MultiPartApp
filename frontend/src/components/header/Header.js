// frontend/src/components/header/Header.js
import React from 'react';
import HeaderSearch from './header_search/HeaderSearch'; // Импортируем HeaderSearch
import TopMenu_front from './top_meniu/TopMenu_front'; // Импортируем TopMenu_front

const Header = () => {
    return (
        <header>
            <TopMenu_front /> {/* Используем TopMenu_front */}
            <HeaderSearch /> {/* Используем HeaderSearch */}
        </header>
    );
};

export default Header;
