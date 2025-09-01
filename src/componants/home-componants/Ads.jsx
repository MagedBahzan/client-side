import React from "react";
import "../home-desktop-styles/ads.css"
import "../home-laptop-styles/ads.css"
import "../home-phone-styles/ads.css"

function Ads() {
    return(
        <div className="ads-container">
            <div><img src="https://b9.icdn.ru/m/maged-bahzan/7/79020037Pqk.jpg" alt="not found"/></div>
            <div className="mobile-border"><img src="https://b9.icdn.ru/m/maged-bahzan/7/79020037Pqk.jpg" alt="not found"/></div>
            <div><img src="https://b9.icdn.ru/m/maged-bahzan/7/79020037Pqk.jpg" alt="not found"/></div>
            <div className="hide-on-mobile"><img src="https://b9.icdn.ru/m/maged-bahzan/7/79020037Pqk.jpg" alt="not found"/></div>
            <div className="hide-on-mobile"><img src="https://b9.icdn.ru/m/maged-bahzan/7/79020037Pqk.jpg" alt="not found"/></div>
            <div className="hide-on-mobile"><img src="https://b9.icdn.ru/m/maged-bahzan/7/79020037Pqk.jpg" alt="not found"/></div>
        </div>
    )
}

export default Ads;