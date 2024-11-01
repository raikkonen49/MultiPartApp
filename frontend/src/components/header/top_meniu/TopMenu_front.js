import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Добавьте импорт компонента Link

const TopMenu_front = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const style = {
        background: `#fff url('/assets/img/part-3.png') no-repeat center center`
    };

    return (
        <div className="col-xs-12 header hold" id="top">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 nopad header-left">
                <div className="trigger">
                    <span></span>
                </div>
                <div className="logo">
                    <Link to="/" title="">
                        <img src="/assets/img/logo.png" alt="Logo" />
                    </Link>
                    <span>Philippines</span>
                </div>
                <div className="side-bar">
                    <div className="col-xs-12 noad side-bar-contacts">
                        <a href="tel:+6321234567" title="">+63 2 1234567</a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-account">
                        My Account
                        <div className="col-xs-12 nopad side-bar-register">
                            <span>
                                <a href="#" title="">
                                    Sign In
                                </a>
                            </span>
                            /
                            <span>
                                <a href="#" title="">
                                    Register
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-xs-12 nopad side-bar-wish">
                        <a href="#" title="">My Wish List
                            <div className="wish-ball">
                                <span className="wish-number">2</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-request">
                        <a href="#" title="">Parts Request</a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-contact-us">
                        <a href="#" title="">Contacts Us</a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-about-us">
                        <a href="#" title="">About Us</a>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="#" title="">
                                    About Us
                                </a>
                            <ul>
                                <li>
                                    <a href="#" title="">About Multipart</a>
                                </li>
                                <li>
                                    <a href="#" title="">Waranty</a>
                                </li>
                                <li>
                                    <a href="#" title="">Delivery</a>
                                </li>
                                <li>
                                    <a href="#" title="">FAQs</a>
                                </li>
                                <li>
                                    <a href="#" title="">Customer Support</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" title="">
                                Parts Request
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 nopad header-left mob">
                <div className="col-xs-4 nopad logo">
                    <Link to="/" title="">
                        <img src="/assets/img/logo.png" alt="Logo" />
                    </Link>
                    <span>Philippines</span>
                </div>
                <div className="col-xs-4 nopad trigger">
                    <span></span>
                </div>
                <div className="side-bar">
                    <div className="col-xs-12 noad side-bar-contacts">
                        <a href="tel:+6321234567" title="">+63 2 1234567</a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-account">
                        My Account
                        <div className="col-xs-12 nopad side-bar-register">
                            <span>
                                <a href="#" title="">
                                    Sign In
                                </a>
                            </span>
                            /
                            <span>
                                <a href="#" title="">
                                    Register
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-xs-12 nopad side-bar-wish">
                        <a href="#" title="">My Wish List
                            <div className="wish-ball">
                                <span className="wish-number">2</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-request">
                        <a href="#" title="">Parts Request</a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-contact-us">
                        <a href="#" title="">Contacts Us</a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-about-us">
                        <a href="#" title="">About Us</a>
                    </div>
                </div>
                <div className="col-xs-4 nopad nav">
                    <ul>
                        <li>
                            <a href="#" title="">
                                    About Us
                                </a>
                            <ul>
                                <li>
                                    <a href="#" title="">About Multipart</a>
                                </li>
                                <li>
                                    <a href="#" title="">Waranty</a>
                                </li>
                                <li>
                                    <a href="#" title="">Delivery</a>
                                </li>
                                <li>
                                    <a href="#" title="">FAQs</a>
                                </li>
                                <li>
                                    <a href="#" title="">Customer Support</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-push-4 nopad header-info-block">
                <ul>
                    <li>
                        <a className="phone" href="tel:+6321234567">
                            <span>+63 2 1234567</span>
                        </a>
                    </li>
                    <li>
                        <a className="account" href="#" title="">
                            <span>My Account</span>
                        </a>
                        <div className="account-dropdown">
                            <div className="col-xs-12 nopad dropdown-title">
                                My Account
                            </div>
                            <div className="col-xs-12 nopad dropdown-bth-holder">
                                <a className="dropdown-bth" href="#" title="">Sign In</a>
                            </div>
                            <div className="col-xs-12 nopad dropdown-register">
                                New Customer? <a href="#" title="">Register</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a className="wish" href="#" title="">
                            <span>Wish List</span>
                        </a>
                    </li>
                    <li>
                        <a className="cart" href="#" title="">
                            <span>Shopping Cart</span>
                            <div className="wish-ball">
                                <span className="wish-number">2</span>
                            </div>
                        </a>
                        <div className="cart-dropdown">
                            <span></span>
                            <div className="col-xs-12 nopad cart-dropdown-top">
                                <ul>
                                    <li>
                                        <div className="col-xs-12 nopad cart-img" style={style}></div>
                                    </li>
                                    <li>
                                        <div className="col-xs-12 cart-title">
                                            Power control module for day driving light
                                        </div>
                                        <div className="col-xs-12 cart-item-price">
                                            Qty: 1 <span>7,80 €</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-12 nopad cart-price">
                                1 item in your Cart:<span>7,80 €</span>
                            </div>
                            <div className="col-xs-12 nopad cart-dropdown-bottom">
                                <ul>
                                    <li>
                                        <a className="btn cart c-out" href="#" title="">Checkout</a>
                                    </li>
                                    <li>
                                        <a className="btn cart c-view" href="#" title="">View Shopping Cart</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-push-4 nopad header-info-block mob">
                <ul>
                    <li>
                        <a className="phone" href="tel:+6321234567">
                            <span>+63 2 1234567</span>
                        </a>
                    </li>
                    <li>
                        <a className="account" href="#" title="">
                            <span>My Account</span>
                        </a>
                        <div className="account-dropdown">
                            <div className="col-xs-12 nopad dropdown-title">
                                My Account
                            </div>
                            <div className="col-xs-12 nopad dropdown-bth-holder">
                                <a className="dropdown-bth" href="#" title="">Sign In</a>
                            </div>
                            <div className="col-xs-12 nopad dropdown-register">
                                New Customer? <a href="#" title="">Register</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a className="wish" href="#" title="">
                            <span>Wish List</span>
                        </a>
                    </li>
                    <li>
                        <a className="cart" href="#" title="">
                            <span>Shopping Cart</span>
                            <div className="wish-ball">
                                <span className="wish-number">2</span>
                            </div>
                        </a>
                        <div className="cart-dropdown">
                            <span></span>
                            <div className="col-xs-12 nopad cart-dropdown-top">
                                <ul>
                                    <li>
                                        <div className="col-xs-12 nopad cart-img" style={style}></div>
                                    </li>
                                    <li>
                                        <div className="col-xs-12 cart-title">
                                            Power control module for day driving light
                                        </div>
                                        <div className="col-xs-12 cart-item-price">
                                            Qty: 1 <span>7,80 €</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-12 nopad cart-price">
                                1 item in your Cart:<span>7,80 €</span>
                            </div>
                            <div className="col-xs-12 nopad cart-dropdown-bottom">
                                <ul>
                                    <li>
                                        <a className="btn cart c-out" href="#" title="">Checkout</a>
                                    </li>
                                    <li>
                                        <a className="btn cart c-view" href="#" title="">View Shopping Cart</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a className="request" href="#" title="">
                            <span>Parts Request</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-lg-pull-4 nopad">
                <form className="col-xs-12 nopad header-search-block hold" action="" method="">
                    <div className="col-xs-8 col-sm-9 nopad header-search">
                        <input type="text" placeholder="Search by part number or keywords" name="" value={searchValue} onChange={handleSearchChange} />
                    </div>
                    <div className="col-xs-4 col-sm-3 nopad header-search-btn-holder">
                        <button className="btn" type="submit" name="button">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TopMenu_front;
