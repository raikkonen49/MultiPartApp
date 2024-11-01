import React from 'react';

const HeaderSearch = () => {
    return (
        <div className="intro-container" style={{ background: 'url("/assets/img/intro-img.png") no-repeat center center' }}>
            <div className="row">
                <div className="col-xs-12 intro-title">
                    <h2>Used Car Parts Online Store</h2>
                    <span>Large selection of high quality used car parts. Save up to 70% on dealer prices!</span>
                </div>
            </div>
            <div className="row row-intro-search">
                <div className="col-xs-12 nopad intro-search-holder">
                    <form className="col-xs-12 nopad" action="" method="">
                        <div className="col-xs-9 nopad intro-search">
                            <input placeholder="Search by part number or keywords" type="text" name="" value="" onChange={(e) => console.log(e.target.value)} />
                        </div>
                        <div className="col-xs-3 nopad intro-search-btn-holder">
                            <button className="btn" type="submit" name="button">Search</button>
                        </div>
                        <div className="search-dropdown-container">
                            <div className="col-xs-12 nopad search-dropdown">
                                <div className="col-xs-12 nopad search-dropdown-title">
                                    Parts Groups
                                </div>
                                <div className="col-xs-12 nopad part-group">
                                    <div className="col-xs-12 col-sm-3 nopad part-info">
                                        <div className="col-xs-12 nopad part-info-title p-engine">
                                            <h2>Engine</h2>
                                        </div>
                                        <div className="col-xs-12 nopad part-info-text">
                                            For AUDI A6 2014
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-9 nopad group-items">
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> cover
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> mounts
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 nopad part-group">
                                    <div className="col-xs-12 col-sm-3 nopad part-info">
                                        <div className="col-xs-12 nopad part-info-title p-ac">
                                            <h2>AC & Heating</h2>
                                        </div>
                                        <div className="col-xs-12 nopad part-info-text">
                                            For AUDI A6 2014
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-9 nopad group-items">
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> oil cooler
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 nopad part-group">
                                    <div className="col-xs-12 col-sm-3 nopad part-info">
                                        <div className="col-xs-12 nopad part-info-title p-electrical">
                                            <h2>Electrical System</h2>
                                        </div>
                                        <div className="col-xs-12 nopad part-info-text">
                                            For AUDI A6 2014
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-9 nopad group-items">
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> control module
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <strong>Engine</strong> wire <span>harness</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> fuse box
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> wire harness
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> control modle
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="more" href="#">
                                                        View more
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xs-12 nopad search-dropdown">
                                <div className="col-xs-12 nopad search-dropdown-title">
                                    Parts Groups
                                </div>
                                <div className="col-xs-12 nopad part-group">
                                    <div className="col-xs-12 col-sm-3 nopad part-info">
                                        <div className="col-xs-12 nopad part-info-title p-engine">
                                            <h2>Engine</h2>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-9 nopad group-items">
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> cover
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> mounts
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 nopad part-group">
                                    <div className="col-xs-12 col-sm-3 nopad part-info">
                                        <div className="col-xs-12 nopad part-info-title p-ac">
                                            <h2>AC & Heating</h2>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-9 nopad group-items">
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> oil cooler
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 nopad part-group">
                                    <div className="col-xs-12 col-sm-3 nopad part-info">
                                        <div className="col-xs-12 nopad part-info-title p-electrical">
                                            <h2>Electrical System</h2>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-9 nopad group-items">
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> control module
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <strong>Engine</strong> wire <span>harness</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> fuse box
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> wire harness
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 nopad group-items-column">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span><strong>Engine</strong></span> control modle
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="more" href="#">
                                                        View more
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search-dropdown-container code">
                            <div className="col-xs-12 nopad search-dropdown">
                                <div className="col-xs-12 nopad part-item-block">
                                    <a href="#">
                                        <div className="col-xs-3 nopad part-item-img">
                                            <img src="/assets/img/part-3.png" alt="" title=""/>
                                        </div>
                                        <div className="col-xs-6 nopad part-item-info">
                                            <div className="col-xs-12 nopad part-item-info-title">
                                                <h2>Power control module for day driving light</h2>
                                            </div>
                                            <div className="col-xs-12 nopad part-item-code">
                                                <span>7500255</span>-AB
                                            </div>
                                            <div className="col-xs-12 nopad part-item-about">
                                                Mercedes-Benz C-className (Sportcoupe) (CL203) (2001 - 2011)
                                            </div>
                                        </div>
                                        <div className="col-xs-3 nopad part-item-price">
                                            7,80 €
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xs-12 nopad part-item-block">
                                    <a href="#">
                                        <div className="col-xs-3 nopad part-item-img">
                                            <img src="/assets/img/part-4.png" alt="" title=""/>
                                        </div>
                                        <div className="col-xs-6 nopad part-item-info">
                                            <div className="col-xs-12 nopad part-item-info-title">
                                                <h2>„Swag Cap“ wheel bearing</h2>
                                            </div>
                                            <div className="col-xs-12 nopad part-item-code">
                                                <span>7500255</span>-AB
                                            </div>
                                            <div className="col-xs-12 nopad part-item-about">
                                                Audi A6 (C7) Allroad 2012
                                            </div>
                                        </div>
                                        <div className="col-xs-3 nopad part-item-price">
                                            9,20 €
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xs-12 nopad part-item-block">
                                    <a href="#">
                                        <div className="col-xs-3 nopad part-item-img">
                                            <img src="/assets/img/part-3.png" alt="" title=""/>
                                        </div>
                                        <div className="col-xs-6 nopad part-item-info">
                                            <div className="col-xs-12 nopad part-item-info-title">
                                                <h2>Power control module for day driving light</h2>
                                            </div>
                                            <div className="col-xs-12 nopad part-item-code">
                                                <span>7500255</span>-AB
                                            </div>
                                            <div className="col-xs-12 nopad part-item-about">
                                                Mercedes-Benz C-className (Sportcoupe) (CL203) (2001 - 2011)
                                            </div>
                                        </div>
                                        <div className="col-xs-3 nopad part-item-price">
                                            7,80 €
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xs-12 nopad text-right show-all">
                                    <a href="#">Show All Products</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="search-info-btn">
                        <div className="search-info">
                            <div className="col-xs-12 nopad search-info-title">
                                How to search?
                            </div>
                            <ul>
                                <li>
                                    <div className="col-xs-12 nopad search-info-left">
                                        <div className="col-xs-12 nopad search-info-type">
                                            Request type
                                        </div>
                                        <div className="col-xs-12 nopad search-info-text">
                                            <div className="col-xs-12 nopad search-info-text-number">
                                                <p><strong>by Part Number</strong></p>
                                                <p>[BMW]</p>
                                                <p>[VW and Audi]</p>
                                                <p>[Mercedes-Benz]</p>
                                                <p>[Porcshe]</p>
                                            </div>
                                            <div className="col-xs-12 nopad search-info-text-name">
                                                <p><strong>by Part name</strong></p>
                                                <p><strong>by Car Make + Part name</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-xs-12 nopad search-info-right">
                                        <div className="col-xs-12 nopad search-info-type">
                                            Example
                                        </div>
                                        <div className="col-xs-12 nopad search-info-text">
                                            <div className="col-xs-12 nopad search-info-text-number hold">
                                                <p>6512 6958566</p>
                                                <p>4F0 145 155 L</p>
                                                <p>A 117 030 10 17</p>
                                                <p>997 642 157 01</p>
                                            </div>
                                            <div className="col-xs-12 nopad search-info-text-name hold">
                                                <p>Headlight</p>
                                                <p>Mercedes Fuel pump</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSearch;
