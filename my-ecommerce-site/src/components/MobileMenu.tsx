import React from 'react';

const SideMenu: React.FC = () => {
  return (
    <div className="mobile-menu-container">
    <div className="mobile-menu-wrapper">
        <span className="mobile-menu-close"><i className="fa fa-times" /></span>
        <nav className="mobile-nav">
        <ul className="mobile-menu menu-with-icon">
            <li><a href="demo1.html"><i className="icon-home" />Home</a></li>
            <li>
            <a href="demo1-shop.html" className="sf-with-ul"><i className="sicon-badge" />Categories</a>
            <ul>
                <li><a href="category.html">Full Width Banner</a></li>
                <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                <li><a href="https://portotheme.com/html/porto_ecommerce/category-sidebar-left.html">Left Sidebar</a></li>
                <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                <li><a href="category-off-canvas.html">Off Canvas Filter</a></li>
                <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                <li><a href="demo1.html#">List Types</a></li>
                <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll<span className="tip tip-new">New</span></a></li>
                <li><a href="category.html">3 Columns Products</a></li>
                <li><a href="category-4col.html">4 Columns Products</a></li>
                <li><a href="category-5col.html">5 Columns Products</a></li>
                <li><a href="category-6col.html">6 Columns Products</a></li>
                <li><a href="category-7col.html">7 Columns Products</a></li>
                <li><a href="category-8col.html">8 Columns Products</a></li>
            </ul>
            </li>
            <li>
            <a href="demo1-product.html" className="sf-with-ul"><i className="sicon-basket" />Products</a>
            <ul>
                <li>
                <a href="demo1.html#" className="nolink">PRODUCT PAGES</a>
                <ul>
                    <li><a href="product.html">SIMPLE PRODUCT</a></li>
                    <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                    <li><a href="product.html">SALE PRODUCT</a></li>
                    <li><a href="product.html">FEATURED &amp; ON SALE</a></li>
                    <li><a href="product-sticky-info.html">WIDTH CUSTOM TAB</a></li>
                    <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a></li>
                    <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a></li>
                    <li><a href="product-addcart-sticky.html">ADD CART STICKY</a></li>
                </ul>
                </li>
                <li>
                <a href="demo1.html#" className="nolink">PRODUCT LAYOUTS</a>
                <ul>
                    <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a></li>
                    <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                    <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                    <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                    <li><a href="product-sticky-both.html">LEFT &amp; RIGHT STICKY</a></li>
                    <li><a href="product-transparent-image.html">TRANSPARENT IMAGE</a></li>
                    <li><a href="product-center-vertical.html">CENTER VERTICAL</a></li>
                    <li><a href="demo1.html#">BUILD YOUR OWN</a></li>
                </ul>
                </li>
            </ul>
            </li>
            <li>
            <a href="demo1.html#" className="sf-with-ul"><i className="sicon-envelope" />Pages</a>
            <ul>
                <li>
                <a href="wishlist.html">Wishlist</a>
                </li>
                <li>
                <a href="cart.html">Shopping Cart</a>
                </li>
                <li>
                <a href="checkout.html">Checkout</a>
                </li>
                <li>
                <a href="dashboard.html">Dashboard</a>
                </li>
                <li>
                <a href="login.html">Login</a>
                </li>
                <li>
                <a href="forgot-password.html">Forgot Password</a>
                </li>
            </ul>
            </li>
            <li><a href="blog.html"><i className="sicon-book-open" />Blog</a></li>
            <li><a href="demo1-about.html"><i className="sicon-users" />About Us</a></li>
        </ul>
        <ul className="mobile-menu menu-with-icon mt-2 mb-2">
            <li className="border-0">
            <a href="demo1.html#" target="_blank"><i className="sicon-star" />Buy Porto!<span className="tip tip-hot">Hot</span></a>
            </li>
        </ul>
        <ul className="mobile-menu">
            <li><a href="login.html">My Account</a></li>
            <li><a href="demo1-contact.html">Contact Us</a></li>
            <li><a href="wishlist.html">My Wishlist</a></li>
            <li><a href="demo1.html#">Site Map</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="login.html" className="login-link">Log In</a></li>
        </ul>
        </nav>
        {/* End .mobile-nav */}
        <form className="search-wrapper mb-2" action="demo1.html#">
        <input type="text" className="form-control mb-0" placeholder="Search..." required />
        <button className="btn icon-search text-white bg-transparent p-0" type="submit" />
        </form>
        <div className="social-icons">
        <a href="demo1.html#" className="social-icon social-facebook icon-facebook" target="_blank">
        </a>
        <a href="demo1.html#" className="social-icon social-twitter icon-twitter" target="_blank">
        </a>
        <a href="demo1.html#" className="social-icon social-instagram icon-instagram" target="_blank">
        </a>
        </div>
    </div>
    {/* End .mobile-menu-wrapper */}
    </div>
  );
};

export default SideMenu;