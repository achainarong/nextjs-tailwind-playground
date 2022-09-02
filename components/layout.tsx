import React from 'react';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  return (
    <div>
      <SideNav />
      <div className="pl-60 h-full bg-white">{children}</div>
    </div>
  );
};

export default Layout;
