import React from "react";
import "../home-desktop-styles/headerStyle.css";
import "../home-laptop-styles/headerStyle.css";
import "../home-phone-styles/headerStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function NavBar() {
  const activLinks = ({ isActive }) => (isActive ? "active-link" : null);
  return (
    <div className="nav-bar">
      <div>
        <div className="nav-bar-container">
          <div className="logo">
            <FontAwesomeIcon icon={faDragon} />
          </div>
          <div className="pages-buttons-container">
            <NavLink to="/" end className={activLinks}>Home</NavLink>
            <NavLink to="courses" end className={activLinks}>Courses</NavLink>
            <NavLink to="about" end className={activLinks}>About Us</NavLink>
            <NavLink to="pricing" end className={activLinks}>Pricing</NavLink>
            <NavLink to="contact" end className={activLinks}>Contact</NavLink>
          </div>
        </div>
        <div className="login-buttons">
          <div className="display-flex-row flex-align-center cursor-pointer">
            <NavLink to="/Skillbridge-Sign-Up">Sign Up</NavLink>
          </div>
          <NavLink to="Skillbridge-login">Login</NavLink>
        </div>
        <div className="hiden-nav-bar-mobile">
            <FontAwesomeIcon icon={faBars} />
            <div className="pages-buttons-container-mobile">
              <NavLink to="/" end className={activLinks}>Home</NavLink>
              <NavLink to="courses" end className={activLinks}>Courses</NavLink>
              <NavLink to="about" end className={activLinks}>About Us</NavLink>
              <NavLink to="pricing" end className={activLinks}>Pricing</NavLink>
              <NavLink to="contact" end className={activLinks}>Contact</NavLink>
            </div>
          </div>
      </div>
    </div>
  );
}

export default NavBar;
