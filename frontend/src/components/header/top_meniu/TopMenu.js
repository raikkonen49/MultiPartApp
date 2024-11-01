import React, { useState } from 'react';

const TopMenu = () => {

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
                    <a href="#" title=""><img src="/assets/img/logo.png" alt="Logo" /></a>
                    <span>Philippines</span>
                </div>
                <div className="side-bar">
                    <div className="col-xs-12 noad side-bar-contacts">
                        <a href="tel:+6321234567" title="">+63 2 1234567</a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-group">
                        <div className="col-xs-12 nopad side-bar-group-title">
                            Part Groups
                            <span></span>
                        </div>
                        <div className="col-xs-12 nopad side-bar-group-list">
                            <ul>
                                <li className="p-engine">
                                    <a href="#" title="">
                                        <h2>Engine</h2>
                                    </a>
                                </li>
                                <li className="p-body">
                                    <a href="#" title="">
                                        <h2>Body</h2>
                                    </a>
                                </li>
                                <li className="p-ac">
                                    <a href="#" title="">
                                        <h2>AC & Heating</h2>
                                    </a>
                                </li>
                                <li className="p-fs">
                                    <a href="#" title="">
                                        <h2>Fuel System</h2>
                                    </a>
                                </li>
                                <li className="p-es">
                                    <a href="#" title="">
                                        <h2>Exhaust System</h2>
                                    </a>
                                </li>
                                <li className="p-bs">
                                    <a href="#" title="">
                                        <h2>Brake System</h2>
                                    </a>
                                </li>
                                <li className="p-steering">
                                    <a href="#" title="">
                                        <h2>Steering</h2>
                                    </a>
                                </li>
                                <li className="p-gear">
                                    <a href="#" title="">
                                        <h2>Gearbox</h2>
                                    </a>
                                </li>
                                <li className="p-box">
                                    <a href="#" title="">
                                        <h2>Transfer Box / Drive Shaft</h2>
                                    </a>
                                </li>
                                <li className="p-fa">
                                    <a href="#" title="">
                                        <h2>Front Axle</h2>
                                    </a>
                                </li>
                                <li className="p-ra">
                                    <a href="#" title="">
                                        <h2>Rear Axle</h2>
                                    </a>
                                </li>
                                <li className="p-lighting">
                                    <a href="#" title="">
                                        <h2>Lighting</h2>
                                    </a>
                                </li>
                                <li className="p-window">
                                    <a href="#" title="">
                                        <h2>Windows</h2>
                                    </a>
                                </li>
                                <li className="p-ww">
                                    <a href="#" title="">
                                        <h2>Wipers/Washer</h2>
                                    </a>
                                </li>
                                <li className="p-instrument">
                                    <a href="#" title="">
                                        <h2>Instrument</h2>
                                    </a>
                                </li>
                                <li className="p-electrical current">
                                    <a href="#" title="">
                                        <h2>Electrical System</h2>
                                    </a>
                                    <div className="sub-meniu">
                                        <div className="col-xs-12 col-sm-4 nopad">
                                            <ul>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Battery
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Positive battery cable
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Negative battery cable</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>DAB tuner</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Engine control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Gearbox control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Suspension control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Acceleration sensor</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Fuel pump control module</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Hand break control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Starter</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Alternator</h2>
                                                    </a>
                                                </li>
                                                <li className="disable">
                                                    <a href="#" title="">
                                                        <h2>Power control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Tuner control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Head-up display</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Ignition lock</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Key</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>CD Changer</h2>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad">
                                            <ul>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Battery
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Positive battery cable
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Negative battery cable</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>DAB tuner</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Engine control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Gearbox control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Suspension control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Acceleration sensor</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Fuel pump control module</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Hand break control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Starter</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Alternator</h2>
                                                    </a>
                                                </li>
                                                <li className="disable">
                                                    <a href="#" title="">
                                                        <h2>Power control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Tuner control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Head-up display</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Ignition lock</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Key</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>CD Changer</h2>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad">
                                            <ul>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Battery
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Positive battery cable
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Negative battery cable</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>DAB tuner</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Engine control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Gearbox control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Suspension control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Acceleration sensor</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Fuel pump control module</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Hand break control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Starter</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Alternator</h2>
                                                    </a>
                                                </li>
                                                <li className="disable">
                                                    <a href="#" title="">
                                                        <h2>Power control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Tuner control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Head-up display</h2>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="col-xs-12 nopad sub-meniu-img">
                                                <img src="/assets/img/1.png" alt="" title="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-lock">
                                    <a href="#" title="">
                                        <h2>Locking System</h2>
                                    </a>
                                </li>
                                <li className="p-trim">
                                    <a href="#" title="">
                                        <h2>Vehicle Trim</h2>
                                    </a>
                                </li>
                                <li className="p-interior">
                                    <a href="#" title="">
                                        <h2>Interior</h2>
                                    </a>
                                </li>
                                <li className="p-audio">
                                    <a href="#" title="">
                                        <h2>Audio / Navigation systems</h2>
                                    </a>
                                </li>
                                <li className="p-rs">
                                    <a href="#" title="">
                                        <h2>Restraint System</h2>
                                    </a>
                                </li>
                                <li className="p-cc">
                                    <a href="#" title="">
                                        <h2>Distance Syst., Cruise Control</h2>
                                    </a>
                                </li>
                                <li className="p-hybrid">
                                    <a href="#" title="">
                                        <h2>e-Vehicle & Hybrid</h2>
                                    </a>
                                </li>
                                <li className="p-weels">
                                    <a href="#" title="">
                                        <h2>Wheels/Tyres</h2>
                                    </a>
                                </li>
                                <li className="p-accessories">
                                    <a href="#" title="">
                                        <h2>
                                            Accessories
                                        </h2>
                                    </a>
                                </li>
                            </ul>
                        </div>
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
                    <a href="#" title=""><img src="img/logo.png" alt="" title=""/></a>
                    <span>Philippines</span>
                </div>
                <div className="col-xs-4 nopad trigger">
                    <span></span>
                </div>
                <div className="side-bar">
                    <div className="col-xs-12 noad side-bar-contacts">
                        <a href="tel:+6321234567" title="">+63 2 1234567</a>
                    </div>
                    <div className="col-xs-12 nopad side-bar-group">
                        <div className="col-xs-12 nopad side-bar-group-title">
                            Part Groups
                            <span></span>
                        </div>
                        <div className="col-xs-12 nopad side-bar-group-list">
                            <ul>
                                <li className="p-engine">
                                    <a href="#" title="">
                                        <h2>Engine</h2>
                                    </a>
                                </li>
                                <li className="p-body">
                                    <a href="#" title="">
                                        <h2>Body</h2>
                                    </a>
                                </li>
                                <li className="p-ac">
                                    <a href="#" title="">
                                        <h2>AC & Heating</h2>
                                    </a>
                                </li>
                                <li className="p-fs">
                                    <a href="#" title="">
                                        <h2>Fuel System</h2>
                                    </a>
                                </li>
                                <li className="p-es">
                                    <a href="#" title="">
                                        <h2>Exhaust System</h2>
                                    </a>
                                </li>
                                <li className="p-bs">
                                    <a href="#" title="">
                                        <h2>Brake System</h2>
                                    </a>
                                </li>
                                <li className="p-steering">
                                    <a href="#" title="">
                                        <h2>Steering</h2>
                                    </a>
                                </li>
                                <li className="p-gear">
                                    <a href="#" title="">
                                        <h2>Gearbox</h2>
                                    </a>
                                </li>
                                <li className="p-box">
                                    <a href="#" title="">
                                        <h2>Transfer Box / Drive Shaft</h2>
                                    </a>
                                </li>
                                <li className="p-fa">
                                    <a href="#" title="">
                                        <h2>Front Axle</h2>
                                    </a>
                                </li>
                                <li className="p-ra">
                                    <a href="#" title="">
                                        <h2>Rear Axle</h2>
                                    </a>
                                </li>
                                <li className="p-lighting">
                                    <a href="#" title="">
                                        <h2>Lighting</h2>
                                    </a>
                                </li>
                                <li className="p-window">
                                    <a href="#" title="">
                                        <h2>Windows</h2>
                                    </a>
                                </li>
                                <li className="p-ww">
                                    <a href="#" title="">
                                        <h2>Wipers/Washer</h2>
                                    </a>
                                </li>
                                <li className="p-instrument">
                                    <a href="#" title="">
                                        <h2>Instrument</h2>
                                    </a>
                                </li>
                                <li className="p-electrical current">
                                    <a href="#" title="">
                                        <h2>Electrical System</h2>
                                    </a>
                                    <div className="sub-meniu">
                                        <div className="col-xs-12 col-sm-4 nopad">
                                            <ul>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Battery
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Positive battery cable
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Negative battery cable</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>DAB tuner</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Engine control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Gearbox control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Suspension control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Acceleration sensor</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Fuel pump control module</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Hand break control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Starter</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Alternator</h2>
                                                    </a>
                                                </li>
                                                <li className="disable">
                                                    <a href="#" title="">
                                                        <h2>Power control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Tuner control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Head-up display</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Ignition lock</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Key</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>CD Changer</h2>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad">
                                            <ul>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Battery
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Positive battery cable
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Negative battery cable</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>DAB tuner</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Engine control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Gearbox control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Suspension control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Acceleration sensor</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Fuel pump control module</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Hand break control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Starter</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Alternator</h2>
                                                    </a>
                                                </li>
                                                <li className="disable">
                                                    <a href="#" title="">
                                                        <h2>Power control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Tuner control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Head-up display</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Ignition lock</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Key</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>CD Changer</h2>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad">
                                            <ul>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Battery
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>
                                                            Positive battery cable
                                                        </h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Negative battery cable</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>DAB tuner</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Engine control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Gearbox control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Suspension control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Acceleration sensor</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Fuel pump control module</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Hand break control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Starter</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Alternator</h2>
                                                    </a>
                                                </li>
                                                <li className="disable">
                                                    <a href="#" title="">
                                                        <h2>Power control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Tuner control unit</h2>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <h2>Head-up display</h2>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="col-xs-12 nopad sub-meniu-img">
                                                <img src="/assets/img/1.png" alt="" title="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-lock">
                                    <a href="#" title="">
                                        <h2>Locking System</h2>
                                    </a>
                                </li>
                                <li className="p-trim">
                                    <a href="#" title="">
                                        <h2>Vehicle Trim</h2>
                                    </a>
                                </li>
                                <li className="p-interior">
                                    <a href="#" title="">
                                        <h2>Interior</h2>
                                    </a>
                                </li>
                                <li className="p-audio">
                                    <a href="#" title="">
                                        <h2>Audio / Navigation systems</h2>
                                    </a>
                                </li>
                                <li className="p-rs">
                                    <a href="#" title="">
                                        <h2>Restraint System</h2>
                                    </a>
                                </li>
                                <li className="p-cc">
                                    <a href="#" title="">
                                        <h2>Distance Syst., Cruise Control</h2>
                                    </a>
                                </li>
                                <li className="p-hybrid">
                                    <a href="#" title="">
                                        <h2>e-Vehicle & Hybrid</h2>
                                    </a>
                                </li>
                                <li className="p-weels">
                                    <a href="#" title="">
                                        <h2>Wheels/Tyres</h2>
                                    </a>
                                </li>
                                <li className="p-accessories">
                                    <a href="#" title="">
                                        <h2>
                                            Accessories
                                        </h2>
                                    </a>
                                </li>
                            </ul>
                        </div>
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

export default TopMenu;
