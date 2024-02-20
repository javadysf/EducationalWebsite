import React from "react";
import SideBar from "../UserPanel/SideBar";
import { Header } from "../common/Header/Header";
import { Footer } from "../common/Footer/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = (props) => {
  return (
    <div>
      <Header />
      <div className='flex'>
      <SideBar/>
      <Outlet/>
    </div>
      <Footer />
    </div>
  );
};

export default UserLayout;