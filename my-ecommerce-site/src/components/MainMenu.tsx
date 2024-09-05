import React from 'react';
import styles from '../styles/MainMenu.module.css';
import SideMenu from './SideMenu';

const MainMenu: React.FC = () => {
  return (
    <main className="main home">
    <div className="container mb-2">
        <div className="info-boxes-container row row-joined mb-2 font2">
        <div className="info-box info-box-icon-left col-lg-4">
            <i className="icon-shipping" />
            <div className="info-box-content">
            <h4>FREE SHIPPING &amp; RETURN</h4>
            <p className="text-body">Free shipping on all orders over $99</p>
            </div>
            {/* End .info-box-content */}
        </div>
        {/* End .info-box */}
        <div className="info-box info-box-icon-left col-lg-4">
            <i className="icon-money" />
            <div className="info-box-content">
            <h4>MONEY BACK GUARANTEE</h4>
            <p className="text-body">100% money back guarantee</p>
            </div>
            {/* End .info-box-content */}
        </div>
        {/* End .info-box */}
        <div className="info-box info-box-icon-left col-lg-4">
            <i className="icon-support" />
            <div className="info-box-content">
            <h4>ONLINE SUPPORT 24/7</h4>
            <p className="text-body">Lorem ipsum dolor sit amet.</p>
            </div>
            {/* End .info-box-content */}
        </div>
        {/* End .info-box */}
        </div>
        <div className="row">
        <div className="col-lg-9">
            <div className="home-slider slide-animate owl-carousel owl-theme mb-2" data-owl-options="{
                                'loop': false,
                                'dots': true,
                                'nav': false
                            }">
            <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                <img className="slide-bg" style={{backgroundColor: '#2699D0'}} src="images/demoes/demo1/slider/slide-1.png" width={880} height={428} alt="home-slider" />
                <div className="banner-layer appear-animate" data-animation-name="fadeInUpShorter">
                <h4 className="text-white mb-0">Find the Boundaries. Push Through!</h4>
                <h2 className="text-white mb-0">Summer Sale</h2>
                <h3 className="text-white text-uppercase m-b-3">70% Off</h3>
                <h5 className="text-white text-uppercase d-inline-block mb-0 ls-n-20 align-text-bottom">
                    Starting At <b className="coupon-sale-text bg-secondary text-white d-inline-block">$<em className="align-text-top">199</em>99</b></h5>
                <a href="demo1-shop.html" className="btn btn-dark btn-md ls-10">Shop Now!</a>
                </div>
                {/* End .banner-layer */}
            </div>
            {/* End .home-slide */}
            <div className="home-slide home-slide2 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                <img className="slide-bg" style={{backgroundColor: '#dadada'}} src="images/demoes/demo1/slider/slide-2.jpg" width={880} height={428} alt="home-slider" />
                <div className="banner-layer text-uppercase appear-animate" data-animation-name="fadeInUpShorter">
                <h4 className="m-b-2">Over 200 products with discounts</h4>
                <h2 className="m-b-3">Great Deals</h2>
                <h5 className="d-inline-block mb-0 align-top mr-5 mb-2">Starting At
                    <b>$<em>299</em>99</b>
                </h5>
                <a href="demo1-shop.html" className="btn btn-dark btn-md ls-10">Get Yours!</a>
                </div>
                {/* End .banner-layer */}
            </div>
            {/* End .home-slide */}
            <div className="home-slide home-slide3 banner banner-md-vw banner-sm-vw  d-flex align-items-center">
                <img className="slide-bg" style={{backgroundColor: '#e5e4e2'}} src="images/demoes/demo1/slider/slide-3.jpg" width={880} height={428} alt="home-slider" />
                <div className="banner-layer text-uppercase appear-animate" data-animation-name="fadeInUpShorter">
                <h4 className="m-b-2">Up to 70% off</h4>
                <h2 className="m-b-3">New Arrivals</h2>
                <h5 className="d-inline-block mb-0 align-top mr-5 mb-2">Starting At
                    <b>$<em>299</em>99</b>
                </h5>
                <a href="demo1-shop.html" className="btn btn-dark btn-md ls-10">Get Yours!</a>
                </div>
                {/* End .banner-layer */}
            </div>
            {/* End .home-slide */}
            </div>
            {/* End .home-slider */}
            <div className="banners-container m-b-2 owl-carousel owl-theme" data-owl-options="{
                                'dots': false,
                                'margin': 20,
                                'loop': false,
                                'responsive': {
                                    '480': {
                                        'items': 2
                                    },
                                    '768': {
                                        'items': 3
                                    }
                                }
                            }">
            <div className="banner banner1 banner-hover-shadow d-flex align-items-center mb-2 w-100 appear-animate" data-animation-name="fadeInLeftShorter" data-animation-delay={500}>
                <figure className="w-100">
                <img src="images/demoes/demo1/banners/banner-1.jpg" style={{backgroundColor: '#dadada'}} alt="banner" />
                </figure>
                <div className="banner-layer">
                <h3 className="m-b-2">Porto Watches</h3>
                <h4 className="m-b-4 text-primary"><sup className="text-dark"><del>20%</del></sup>30%<sup>OFF</sup></h4>
                <a href="demo1-shop.html" className="text-dark text-uppercase ls-10">Shop Now</a>
                </div>
            </div>
            {/* End .banner */}
            <div className="banner banner2 text-uppercase banner-hover-shadow d-flex align-items-center mb-2 w-100 appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={200}>
                <figure className="w-100">
                <img src="images/demoes/demo1/banners/banner-2.jpg" style={{backgroundColor: '#dadada'}} alt="banner" />
                </figure>
                <div className="banner-layer text-center">
                <h3 className="m-b-1 ls-n-20">Deal Promos</h3>
                <h4 className="text-body">Starting at $99</h4>
                <a href="demo1-shop.html" className="text-dark text-uppercase ls-10">Shop Now</a>
                </div>
            </div>
            {/* End .banner */}
            <div className="banner banner3 banner-hover-shadow d-flex align-items-center mb-2 w-100 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={500}>
                <figure className="w-100">
                <img src="images/demoes/demo1/banners/banner-3.jpg" style={{backgroundColor: '#dadada'}} alt="banner" />
                </figure>
                <div className="banner-layer text-right">
                <h3 className="m-b-2">Handbags</h3>
                <h4 className="mb-3 text-secondary text-uppercase">Starting at $99</h4>
                <a href="demo1-shop.html" className="text-dark text-uppercase ls-10">Shop Now</a>
                </div>
            </div>
            {/* End .banner */}
            </div>
            <h2 className="section-title ls-n-10 m-b-4 appear-animate" data-animation-name="fadeInUpShorter">
            Featured Products</h2>
            <div className="products-slider owl-carousel owl-theme dots-top dots-small m-b-1 pb-1 appear-animate" data-animation-name="fadeInUpShorter">
            <div className="product-default inner-quickview inner-icon">
                <figure className="img-effect">
                <a href="demo1-product.html">
                    <img src="images/demoes/demo1/products/product-1.jpg" width={205} height={205} alt="product" />
                    <img src="images/demoes/demo1/products/product-1-2.jpg" width={205} height={205} alt="product" />
                </a>
                <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                    <div className="product-label label-sale">-20%</div>
                </div>
                <div className="btn-icon-group">
                    <a href="demo1-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" />
                    </a>
                </div>
                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                <div className="product-countdown-container">
                    <span className="product-countdown-title">offer ends in:</span>
                    <div className="product-countdown countdown-compact" data-until="2021, 10, 5" data-compact="true">
                    </div>
                    {/* End .product-countdown */}
                </div>
                {/* End .product-countdown-container */}
                </figure>
                <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                    <a href="demo1-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                </div>
                <h3 className="product-title"> <a href="demo1-product.html">Black Grey Headset</a> </h3>
                <div className="ratings-container">
                    <div className="product-ratings">
                    <span className="ratings" style={{width: '100%'}} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                    <span className="product-price">$9.00</span>
                </div>
                {/* End .price-box */}
                </div>
                {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
                <figure className="img-effect">
                <a href="demo1-product.html">
                    <img src="images/demoes/demo1/products/product-2.jpg" width={205} height={205} alt="product" />
                </a>
                <div className="btn-icon-group">
                    <a href="demo1.html#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                </div>
                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                </figure>
                <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                    <a href="demo1-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                </div>
                <h3 className="product-title"> <a href="demo1-product.html">Battery Charger</a> </h3>
                <div className="ratings-container">
                    <div className="product-ratings">
                    <span className="ratings" style={{width: '100%'}} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                    <span className="product-price">$9.00</span>
                </div>
                {/* End .price-box */}
                </div>
                {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
                <figure className="img-effect">
                <a href="demo1-product.html">
                    <img src="images/demoes/demo1/products/product-3.jpg" width={205} height={205} alt="product" />
                    <img src="images/demoes/demo1/products/product-3-2.jpg" width={205} height={205} alt="product" />
                </a>
                <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                    <div className="product-label label-sale">-30%</div>
                </div>
                <div className="btn-icon-group">
                    <a href="demo1.html#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                </div>
                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                </figure>
                <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                    <a href="demo1-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                </div>
                <h3 className="product-title"> <a href="demo1-product.html">Brown Bag</a> </h3>
                <div className="ratings-container">
                    <div className="product-ratings">
                    <span className="ratings" style={{width: '100%'}} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                    <span className="product-price">$9.00</span>
                </div>
                {/* End .price-box */}
                </div>
                {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
                <figure className="img-effect">
                <a href="demo1-product.html">
                    <img src="images/demoes/demo1/products/product-4.jpg" width={205} height={205} alt="product" />
                    <img src="images/demoes/demo1/products/product-4-2.jpg" width={205} height={205} alt="product" />
                </a>
                <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                </div>
                <div className="btn-icon-group">
                    <a href="demo1.html#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                </div>
                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                </figure>
                <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                    <a href="demo1-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                </div>
                <h3 className="product-title"> <a href="demo1-product.html">Casual Note Bag</a> </h3>
                <div className="ratings-container">
                    <div className="product-ratings">
                    <span className="ratings" style={{width: '100%'}} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                    <span className="product-price">$9.00</span>
                </div>
                {/* End .price-box */}
                </div>
                {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
                <figure className="img-effect">
                <a href="demo1-product.html">
                    <img src="images/demoes/demo1/products/product-5.jpg" width={205} height={205} alt="product" />
                    <img src="images/demoes/demo1/products/product-5-2.jpg" width={205} height={205} alt="product" />
                </a>
                <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                </div>
                <div className="btn-icon-group">
                    <a href="demo1.html#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                </div>
                <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                </figure>
                <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                    <a href="demo1-shop.html" className="product-category">category</a>
                    </div>
                    <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                </div>
                <h3 className="product-title"> <a href="demo1-product.html">Porto Extended Camera</a>
                </h3>
                <div className="ratings-container">
                    <div className="product-ratings">
                    <span className="ratings" style={{width: '100%'}} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                    <span className="product-price">$9.00</span>
                </div>
                {/* End .price-box */}
                </div>
                {/* End .product-details */}
            </div>
            </div>
            {/* End .featured-proucts */}
            <div className="brands-slider owl-carousel owl-theme images-center appear-animate" data-animation-name="fadeIn" data-animation-duration={700} data-owl-options="{
                        'margin': 0,
                                'responsive': {
                                    '768': {
                                        'items': 4
                            },
                            '991': {
                                        'items': 4
                            },
                            '1200': {
                                        'items': 5
                                    }
                                }
                            }">
            <img src="https://portotheme.com/html/porto_ecommerce/images/brands/small/brand1.png" width={140} height={60} alt="brand" />
            <img src="images/brands/small/brand2.png" width={140} height={60} alt="brand" />
            <img src="images/brands/small/brand3.png" width={140} height={60} alt="brand" />
            <img src="images/brands/small/brand4.png" width={140} height={60} alt="brand" />
            <img src="images/brands/small/brand5.png" width={140} height={60} alt="brand" />
            <img src="images/brands/small/brand6.png" width={140} height={60} alt="brand" />
            </div>
            {/* End .brands-slider */}
            <div className="row products-widgets">
            <div className="col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate" data-animation-name="fadeInLeftShorter" data-animation-delay={200}>
                <div className="product-column">
                <h3 className="section-sub-title ls-n-20">Top Rated Products</h3>
                <div className="product-default left-details product-widget">
                    <figure>
                    <a href="demo1-product.html">
                        <img src="images/demoes/demo1/products/small/product-4.jpg" width={84} height={84} alt="product" />
                        <img src="images/demoes/demo1/products/small/product-4-2.jpg" width={84} height={84} alt="product" />
                    </a>
                    </figure>
                    <div className="product-details">
                    <h3 className="product-title"> <a href="demo1-product.html">Porto Extended
                        Camera</a> </h3>
                    <div className="ratings-container">
                        <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div>
                    {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
                <div className="product-default left-details product-widget">
                    <figure>
                    <a href="demo1-product.html">
                        <img src="images/demoes/demo1/products/small/product-5.jpg" width={84} height={84} alt="product" />
                        <img src="images/demoes/demo1/products/small/product-5-2.jpg" width={84} height={84} alt="product" />
                    </a>
                    </figure>
                    <div className="product-details">
                    <h3 className="product-title"> <a href="demo1-product.html">Blue BackPack</a>
                    </h3>
                    <div className="ratings-container">
                        <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div>
                    {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
                <div className="product-default left-details product-widget ">
                    <figure>
                    <a href="demo1-product.html">
                        <img src="images/demoes/demo1/products/small/product-6.jpg" width={84} height={84} alt="product" />
                        <img src="images/demoes/demo1/products/small/product-6-2.jpg" width={84} height={84} alt="product" />
                    </a>
                    </figure>
                    <div className="product-details">
                    <h3 className="product-title"> <a href="demo1-product.html">Casual Blue
                        Shoes</a> </h3>
                    <div className="ratings-container">
                        <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div>
                    {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
                </div>
                {/* End .product-column */}
            </div>
            {/* End .col-md-4 */}
            <div className="col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate" data-animation-name="fadeInLeftShorter" data-animation-delay={500}>
                <div className="product-column">
                <h3 className="section-sub-title ls-n-20">Best Selling Products</h3>
                <div className="product-default left-details product-widget ">
                    <figure>
                    <a href="demo1-product.html">
                        <img src="images/demoes/demo1/products/small/product-2.jpg" width={84} height={84} alt="product" />
                    </a>
                    </figure>
                    <div className="product-details">
                    <h3 className="product-title"> <a href="demo1-product.html">Battery Charger</a>
                    </h3>
                    <div className="ratings-container">
                        <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div>
                    {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
                <div className="product-default left-details product-widget ">
                    <figure>
                    <a href="demo1-product.html">
                        <img src="images/demoes/demo1/products/small/product-7.jpg" width={84} height={84} alt="product" />
                        <img src="images/demoes/demo1/products/small/product-7-2.jpg" width={84} height={84} alt="product" />
                    </a>
                    </figure>
                    <div className="product-details">
                    <h3 className="product-title"> <a href="demo1-product.html">Computer Mouse</a>
                    </h3>
                    <div className="ratings-container">
                        <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div>
                    {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
                <div className="product-default left-details product-widget ">
                    <figure>
                    <a href="demo1-product.html">
                        <img src="images/demoes/demo1/products/small/product-8.jpg" width={84} height={84} alt="product" />
                        <img src="images/demoes/demo1/products/small/product-8-2.jpg" width={84} height={84} alt="product" />
                    </a>
                    </figure>
                    <div className="product-details">
                    <h3 className="product-title"> <a href="demo1-product.html">Casual Note Bag</a>
                    </h3>
                    <div className="ratings-container">
                        <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div>
                    {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
                </div>
                {/* End .product-column */}
            </div>
            {/* End .col-md-4 */}
            <div className="col-sm-6 col-md-4 pb-4 pb-md-0 appear-animate" data-animation-name="fadeInLeftShorter" data-animation-delay={800}>
                <div className="product-column">
                <h3 className="section-sub-title ls-n-20">Latest Products</h3>
                <div className="product-default left-details product-widget ">
                    <figure>
                    <a href="demo1-product.html">
                        <img src="images/demoes/demo1/products/small/product-9.jpg" width={84} height={84} alt="product" />
                        <img src="images/demoes/demo1/products/small/product-9-2.jpg" width={84} height={84} alt="product" />
                    </a>
                    </figure>
                    <div className="product-details">
                    <h3 className="product-title"> <a href="demo1-product.html">Ultimate 3D
                        Bluetooth Speaker</a> </h3>
                    <div className="ratings-container">
                        <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div>
                    {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
                <div className="product-default left-details product-widget ">
                    <figure>
                    <a href="demo1-product.html">
                        <img src="images/demoes/demo1/products/small/product-10.jpg" width={84} height={84} alt="product" />
                        <img src="images/demoes/demo1/products/small/product-10-2.jpg" width={84} height={84} alt="product" />
                    </a>
                    </figure>
                    <div className="product-details">
                    <h3 className="product-title"> <a href="demo1-product.html">Brown-Black Men
                        Casual Glasses</a> </h3>
                    <div className="ratings-container">
                        <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div>
                    {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
                <div className="product-default left-details product-widget ">
                    <figure>
                    <a href="demo1-product.html">
                        <img src="images/demoes/demo1/products/small/product-11.jpg" width={84} height={84} alt="product" />
                        <img src="images/demoes/demo1/products/small/product-11-2.jpg" width={84} height={84} alt="product" />
                    </a>
                    </figure>
                    <div className="product-details">
                    <h3 className="product-title"> <a href="demo1-product.html">Brown-Black Men
                        Casual Glasses</a> </h3>
                    <div className="ratings-container">
                        <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                        {/* End .ratings */}
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                    </div>
                    {/* End .product-container */}
                    <div className="price-box">
                        <span className="product-price">$49.00</span>
                    </div>
                    {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                </div>
                </div>
                {/* End .product-column */}
            </div>
            {/* End .col-md-4 */}
            </div>
            {/* End .row */}
            <hr className="mt-1 mb-3 pb-2" />
            <div className="feature-boxes-container">
            <div className="row">
                <div className="col-md-4 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={200}>
                <div className="feature-box  feature-box-simple text-center">
                    <i className="icon-earphones-alt" />
                    <div className="feature-box-content p-0">
                    <h3 className="mb-0 pb-1">Customer Support</h3>
                    <h5 className="mb-1 pb-1">Need Assistance?</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                    </div>
                    {/* End .feature-box-content */}
                </div>
                {/* End .feature-box */}
                </div>
                {/* End .col-md-4 */}
                <div className="col-md-4 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={400}>
                <div className="feature-box feature-box-simple text-center">
                    <i className="icon-credit-card" />
                    <div className="feature-box-content p-0">
                    <h3 className="mb-0 pb-1">Secured Payment</h3>
                    <h5 className="mb-1 pb-1">Safe &amp; Fast</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                    </div>
                    {/* End .feature-box-content */}
                </div>
                {/* End .feature-box */}
                </div>
                {/* End .col-md-4 */}
                <div className="col-md-4 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={600}>
                <div className="feature-box feature-box-simple text-center">
                    <i className="icon-action-undo" />
                    <div className="feature-box-content p-0">
                    <h3 className="mb-0 pb-1">Returns</h3>
                    <h5 className="mb-1 pb-1">Easy &amp; Free</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                    </div>
                    {/* End .feature-box-content */}
                </div>
                {/* End .feature-box */}
                </div>
                {/* End .col-md-4 */}
            </div>
            {/* End .row */}
            </div>
            {/* End .feature-boxes-container */}
        </div>
        {/* End .col-lg-9 */}
        <div className="sidebar-overlay" />
        <div className="sidebar-toggle custom-sidebar-toggle"><i className="fas fa-sliders-h" /></div>
        <aside className="sidebar-home col-lg-3 order-lg-first mobile-sidebar">
            <div className="side-menu-wrapper text-uppercase mb-2 d-none d-lg-block">
            <h2 className="side-menu-title bg-gray ls-n-25">Browse Categories</h2>
            <nav className="side-nav">
                <ul className="menu menu-vertical sf-arrows">
                <li className="active"><a href="demo1.html"><i className="icon-home" />Home</a></li>
                <li>
                    <a href="demo1-shop.html" className="sf-with-ul"><i className="sicon-badge" />Categories</a>
                    <div className="megamenu megamenu-fixed-width megamenu-3cols">
                    <div className="row">
                        <div className="col-lg-4">
                        <a href="demo1.html#" className="nolink pl-0">VARIATION 1</a>
                        <ul className="submenu">
                            <li><a href="category.html">Fullwidth Banner</a></li>
                            <li><a href="category-banner-boxed-slider.html">Boxed Slider
                                Banner</a>
                            </li>
                            <li><a href="category-banner-boxed-image.html">Boxed Image
                                Banner</a>
                            </li>
                            <li><a href="demo1-shop.html">Left Sidebar</a></li>
                            <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                            <li><a href="category-off-canvas.html">Off Canvas Filter</a>
                            </li>
                            <li><a href="category-horizontal-filter1.html">Horizontal
                                Filter1</a>
                            </li>
                            <li><a href="category-horizontal-filter2.html">Horizontal
                                Filter2</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-4">
                        <a href="demo1.html#" className="nolink pl-0">VARIATION 2</a>
                        <ul className="submenu">
                            <li><a href="category-list.html">List Types</a></li>
                            <li><a href="category-infinite-scroll.html">Ajax Infinite
                                Scroll</a>
                            </li>
                            <li><a href="category.html">3 Columns Products</a></li>
                            <li><a href="category-4col.html">4 Columns Products</a></li>
                            <li><a href="category-5col.html">5 Columns Products</a></li>
                            <li><a href="category-6col.html">6 Columns Products</a></li>
                            <li><a href="category-7col.html">7 Columns Products</a></li>
                            <li><a href="category-8col.html">8 Columns Products</a></li>
                        </ul>
                        </div>
                        <div className="col-lg-4 p-0">
                        <div className="menu-banner">
                            <figure>
                            <img src="images/menu-banner.jpg" width={192} height={313} alt="Menu banner" />
                            </figure>
                            <div className="banner-content">
                            <h4>
                                <span >UP TO</span><br />
                                <b >50%</b>
                                <i>OFF</i>
                            </h4>
                            <a href="demo1-shop.html" className="btn btn-sm btn-dark">SHOP
                                NOW</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End .megamenu */}
                </li>
                <li>
                    <a href="demo1-product.html" className="sf-with-ul"><i className="sicon-basket" />Products</a>
                    <div className="megamenu megamenu-fixed-width">
                    <div className="row">
                        <div className="col-lg-4">
                        <a href="demo1.html#" className="nolink pl-0">PRODUCT PAGES</a>
                        <ul className="submenu">
                            <li><a href="product.html">SIMPLE PRODUCT</a></li>
                            <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                            <li><a href="product.html">SALE PRODUCT</a></li>
                            <li><a href="product.html">FEATURED &amp; ON SALE</a></li>
                            <li><a href="product-custom-tab.html">WITH CUSTOM TAB</a></li>
                            <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a>
                            </li>
                            <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a>
                            </li>
                            <li><a href="product-addcart-sticky.html">ADD CART STICKY</a>
                            </li>
                        </ul>
                        </div>
                        {/* End .col-lg-4 */}
                        <div className="col-lg-4">
                        <a href="demo1.html#" className="nolink pl-0">PRODUCT LAYOUTS</a>
                        <ul className="submenu">
                            <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a>
                            </li>
                            <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                            <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                            <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                            <li><a href="product-sticky-both.html">LEFT &amp; RIGHT STICKY</a>
                            </li>
                            <li><a href="product-transparent-image.html">TRANSPARENT
                                IMAGE</a></li>
                            <li><a href="product-center-vertical.html">CENTER VERTICAL</a>
                            </li>
                            <li><a href="demo1.html#">BUILD YOUR OWN</a></li>
                        </ul>
                        </div>
                        {/* End .col-lg-4 */}
                        <div className="col-lg-4 p-0">
                        <div className="menu-banner menu-banner-2">
                            <figure>
                            <img src="images/menu-banner-1.jpg" alt="Menu banner" className="product-promo" />
                            </figure>
                            <i>OFF</i>
                            <div className="banner-content">
                            <h4>
                                <span >UP TO</span><br />
                                <b >50%</b>
                            </h4>
                            </div>
                            <a href="demo1-shop.html" className="btn btn-sm btn-dark">SHOP
                            NOW</a>
                        </div>
                        </div>
                        {/* End .col-lg-4 */}
                    </div>
                    {/* End .row */}
                    </div>
                    {/* End .megamenu */}
                </li>
                <li>
                    <a href="demo1.html#" className="sf-with-ul"><i className="sicon-envelope" />Pages</a>
                    <ul>
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="cart.html">Shopping Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="dashboard.html">Dashboard</a></li>
                    <li><a href="demo1-about.html">About Us</a></li>
                    <li><a href="demo1.html#">Blog</a>
                        <ul>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="single.html">Blog Post</a></li>
                        </ul>
                    </li>
                    <li><a href="demo1-contact.html">Contact Us</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="forgot-password.html">Forgot Password</a></li>
                    </ul>
                </li>
                <li><a href="blog.html"><i className="sicon-book-open" />Blog</a></li>
                <li><a href="demo1-about.html"><i className="sicon-users" />About Us</a></li>
                <li><a href="demo1.html#"><i className="icon-cat-gift" />Special Offer!</a></li>
                <li><a href="https://1.envato.market/DdLk5" target="_blank"><i className="sicon-star" />Buy Porto!<span className="tip tip-hot">Hot</span></a></li>
                </ul>
            </nav>
            </div>
            {/* End .side-menu-container */}
            <div className="widget widget-banners px-3 pb-3 text-center">
            <div className="owl-carousel owl-theme dots-small">
                <div className="banner d-flex flex-column align-items-center">
                <h3 className="badge-sale bg-primary d-flex flex-column align-items-center justify-content-center text-uppercase">
                    <em>Sale</em>Many Item
                </h3>
                <h4 className="sale-text text-uppercase"><small>UP
                    TO</small>50<sup>%</sup><sub>off</sub></h4>
                <p>Bags, Clothing, T-Shirts, Shoes, Watches and much more...</p>
                <a href="demo1-shop.html" className="btn btn-dark btn-md">View Sale</a>
                </div>
                {/* End .banner */}
                <div className="banner banner4">
                <figure>
                    <img src="images/demoes/demo1/banners/banner-7.jpg" alt="banner" />
                </figure>
                <div className="banner-layer">
                    <div className="coupon-sale-content">
                    <h4>DRONE + CAMERAS</h4>
                    <h5 className="coupon-sale-text text-gray ls-n-10 p-0 font1"><i>UP
                        TO</i><b className="text-white bg-dark font1">$100</b> OFF</h5>
                    <p className="ls-0">Top Brands and Models!</p>
                    <a href="demo1-shop.html" className="btn btn-inline-block btn-dark btn-black ls-0">VIEW
                        SALE</a>
                    </div>
                </div>
                </div>
                {/* End .banner */}
                <div className="banner banner5">
                <h4>HEADPHONES SALE</h4>
                <figure className="m-b-3">
                    <img src="images/demoes/demo1/banners/banner-8.jpg" alt="banner" />
                </figure>
                <div className="banner-layer">
                    <div className="coupon-sale-content">
                    <h5 className="coupon-sale-text ls-n-10 p-0 font1"><i>UP
                        TO</i><b className="text-white bg-secondary font1">50%</b> OFF</h5>
                    <a href="demo1-shop.html" className="btn btn-inline-block btn-dark btn-black ls-0">VIEW
                        SALE</a>
                    </div>
                </div>
                </div>
                {/* End .banner */}
            </div>
            {/* End .banner-slider */}
            </div>
            {/* End .widget */}
            <div className="widget widget-newsletters bg-gray text-center">
            <h3 className="widget-title text-uppercase m-b-3">Subscribe Newsletter</h3>
            <p className="mb-2">Get all the latest information on Events, Sales and Offers. </p>
            <form action="demo1.html#">
                <div className="form-group position-relative sicon-envolope-letter">
                <input type="email" className="form-control" name="newsletter-email" placeholder="Email address" />
                </div>
                {/* Endd .form-group */}
                <input type="submit" className="btn btn-primary btn-md" defaultValue="Subscribe" />
            </form>
            </div>
            {/* End .widget */}
            <div className="widget widget-testimonials">
            <div className="owl-carousel owl-theme dots-left dots-small">
                <div className="testimonial">
                <div className="testimonial-owner">
                    <figure>
                    <img src="images/clients/client-1.jpg" alt="client" />
                    </figure>
                    <div>
                    <h4 className="testimonial-title">john Smith</h4>
                    <span>CEO &amp; Founder</span>
                    </div>
                </div>
                {/* End .testimonial-owner */}
                <blockquote className="ml-4 pr-0">
                    <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.
                    </p>
                </blockquote>
                </div>
                {/* End .testimonial */}
                <div className="testimonial">
                <div className="testimonial-owner">
                    <figure>
                    <img src="images/clients/client-2.jpg" alt="client" />
                    </figure>
                    <div>
                    <h4 className="testimonial-title">Dae Smith</h4>
                    <span>CEO &amp; Founder</span>
                    </div>
                </div>
                {/* End .testimonial-owner */}
                <blockquote className="ml-4 pr-0">
                    <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.
                    </p>
                </blockquote>
                </div>
                {/* End .testimonial */}
                <div className="testimonial">
                <div className="testimonial-owner">
                    <figure>
                    <img src="images/clients/client-3.jpg" alt="client" />
                    </figure>
                    <div>
                    <h4 className="testimonial-title">John Doe</h4>
                    <span>CEO &amp; Founder</span>
                    </div>
                </div>
                {/* End .testimonial-owner */}
                <blockquote className="ml-4 pr-0">
                    <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.
                    </p>
                </blockquote>
                </div>
                {/* End .testimonial */}
            </div>
            {/* End .testimonials-slider */}
            </div>
            {/* End .widget */}
            <div className="widget widget-posts post-date-in-media media-with-zoom mb-0 mb-lg-2 pb-lg-2">
            <div className="owl-carousel owl-theme dots-left dots-m-0 dots-small" data-owl-options="
                            { 'margin' : 20,
                                'loop': false }">
                <article className="post">
                <div className="post-media">
                    <a href="single.html">
                    <img src="images/blog/home/post-1.jpg" data-zoom-image="images/blog/home/post-1.jpg" width={280} height={209} alt="Post" />
                    </a>
                    <div className="post-date">
                    <span className="day">29</span>
                    <span className="month">Jun</span>
                    </div>
                    {/* End .post-date */}
                    <span className="prod-full-screen">
                    <i className="fas fa-search" />
                    </span>
                </div>
                {/* End .post-media */}
                <div className="post-body">
                    <h2 className="post-title">
                    <a href="single.html">Post Format Standard</a>
                    </h2>
                    <div className="post-content">
                    <p>Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with... </p>
                    <a href="single.html" className="read-more">read more <i className="icon-right-open" /></a>
                    </div>
                    {/* End .post-content */}
                </div>
                {/* End .post-body */}
                </article>
                <article className="post">
                <div className="post-media">
                    <a href="single.html">
                    <img src="images/blog/home/post-2.jpg" data-zoom-image="images/blog/home/post-2.jpg" width={280} height={209} alt="Post" />
                    </a>
                    <div className="post-date">
                    <span className="day">29</span>
                    <span className="month">Jun</span>
                    </div>
                    {/* End .post-date */}
                    <span className="prod-full-screen">
                    <i className="fas fa-search" />
                    </span>
                </div>
                {/* End .post-media */}
                <div className="post-body">
                    <h2 className="post-title">
                    <a href="single.html">Fashion Trends</a>
                    </h2>
                    <div className="post-content">
                    <p>Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with... </p>
                    <a href="single.html" className="read-more">read more <i className="icon-right-open" /></a>
                    </div>
                    {/* End .post-content */}
                </div>
                {/* End .post-body */}
                </article>
                <article className="post">
                <div className="post-media">
                    <a href="single.html">
                    <img src="images/blog/home/post-3.jpg" data-zoom-image="images/blog/home/post-3.jpg" width={280} height={209} alt="Post" />
                    </a>
                    <div className="post-date">
                    <span className="day">29</span>
                    <span className="month">Jun</span>
                    </div>
                    {/* End .post-date */}
                    <span className="prod-full-screen">
                    <i className="fas fa-search" />
                    </span>
                </div>
                {/* End .post-media */}
                <div className="post-body">
                    <h2 className="post-title">
                    <a href="single.html">
                        Post Format Video</a>
                    </h2>
                    <div className="post-content">
                    <p>Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with... </p>
                    <a href="single.html" className="read-more">read more <i className="icon-right-open" /></a>
                    </div>
                    {/* End .post-content */}
                </div>
                {/* End .post-body */}
                </article>
            </div>
            {/* End .posts-slider */}
            </div>
            {/* End .widget */}
        </aside>
        {/* End .col-lg-3 */}
        </div>
        {/* End .row */}
    </div>
    {/* End .container */}
    </main>

  );
};

export default MainMenu;