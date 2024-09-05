import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import MainMenu from './MainMenu';
import CartModal from './CartModal';
import Overlay from './Overlay';
import MobileMenu from './MobileMenu';
import styles from '../styles/Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Porto - Bootstrap eCommerce Template</title>
        <meta name="keywords" content="HTML5 Template" />
        <meta name="description" content="Porto - Bootstrap eCommerce Template" />
        <meta name="author" content="SW-THEMES" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/images/icons/favicon.png" />
        {/* Plugins CSS File */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        {/* Main CSS File */}
        <div className="page-wrapper">
            <Header />
            <MainMenu />
            <div className={styles.content}>
              <SideMenu />
              <main className={styles.main}>{children}</main>
            </div>
            <CartModal />
            <Footer />
        </div>
        <Overlay />
        <MobileMenu />
      </div>
    );
};

export default Layout;