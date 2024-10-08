import React from 'react';

const SideMenu: React.FC = () => {
  return (
    <div>
      <div className="loading-overlay">
        <div className="bounce-loader">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
      <div className="mobile-menu-overlay" />
    </div>
  );
};

export default SideMenu;