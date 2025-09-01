import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "../home-desktop-styles/Footer.css";
import "../home-laptop-styles/Footer.css";
import "../home-phone-styles/Footer.css";
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <div className="footer-section-container">
      <div className="footer-sub-container">
        <div className="footer-contacts">
          <div className="logo">
            <FontAwesomeIcon icon={faDragon} />
          </div>
          <div className="buttons-contacts">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Hello@test.com</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p>+0092123456789</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Somewhere in the World</p>
            </div>
          </div>
        </div>
        <div className="footer-page-sections">
          <div>
            <Link to="/">home</Link>
            <Link to="benefits">benefits</Link>
            <Link to="courses">our courses</Link>
            <Link to="testimonials">our testimonials</Link>
            <Link to="FAQ">our FAQ</Link>
          </div>
          <div>
            <Link to="about">about Us</Link>
            <Link to="company">company</Link>
            <Link to="achievements">achievements</Link>
            <Link to="goals">our goals</Link>
          </div>
          <div>
            <p className="social-Profiles">Social Profiles</p>
            <div className="social-pages">
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
              <a href="https://www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
              <a href="https://www.x.com">
                <FontAwesomeIcon icon={faXTwitter}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="horizintal-line"></div>
      <p>&copy; 2023 Skillbridge. All rights reserved. Maged Bahzan</p>
    </div>
  );
}

export default FooterSection;
