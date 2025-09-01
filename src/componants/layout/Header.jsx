import React from "react";
import NavBar from "./NavBar";
import TopBanner from "./TopBanner";

function Header() {
  return (
    <div className="main-header flex-justify-center flex-align-center">
      <TopBanner />
      <NavBar />
    </div>
  );
}

export default Header;
