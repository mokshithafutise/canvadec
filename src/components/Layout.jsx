import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="h-105">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;