import React from "react";
import { Outlet } from "react-router-dom";
import FooterSection from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterSection />
    </>
  );
}

export default Layout;
