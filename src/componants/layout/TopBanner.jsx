import React from "react";
import "../home-desktop-styles/headerStyle.css";
import "../home-laptop-styles/headerStyle.css";
import "../home-phone-styles/headerStyle.css";

function TopBanner() {
  return (
    <div className="top-banner flex-justify-center flex-align-center">
      <p>
        Free Courses 🌟 Sale Ends Soon, Get It Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 top-banner-arrow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </p>
    </div>
  );
}

export default TopBanner;
