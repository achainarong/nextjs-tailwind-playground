import React from 'react';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  return (
    <div>
      <SideNav />
      <div className="pl-60 pt-5 h-full">{children}</div>
    </div>
  );
};

export default Layout;
