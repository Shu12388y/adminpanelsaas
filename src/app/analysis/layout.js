import React from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/Navbar';

function Layout({ children }) {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div>
          <SideBar />
        </div>
        <div className="w-full pt-5 ">
          <NavBar />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
