import React from "react";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="bg-background-courses">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
