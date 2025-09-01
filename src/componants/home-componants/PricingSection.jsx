import React from "react";
import "../home-desktop-styles/PricingSection.css";
import "../home-laptop-styles/PricingSection.css";
import "../home-phone-styles/PricingSection.css";
import "../home-desktop-styles/breakingNews.css";
import "../home-laptop-styles/breakingNews.css";
import "../home-phone-styles/breakingNews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function PricingSection() {
  const [pricPlanToggle, setPricePlanToggle] = React.useState(false)
  
  function pricingPlanMonth() {
    setPricePlanToggle(false)
  }
  function pricingPlanYear() {
    setPricePlanToggle(true)
  }
  // const activLinks = (pricPlanToggle ? "active-price-plan" : "active-price-plan");

  return (
    <div className="PricingSection-section-container courses-section-container">
      <div>
        <div className="PricingSection-top-header courses-top-header">
          <p>Our Pricing</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="PricingSection-top-header-buttons">
          <button onClick={pricingPlanMonth} className={!pricPlanToggle ? "active-price-plan" : null}>Monthly</button>
          <button onClick={pricingPlanYear} className={pricPlanToggle ? "active-price-plan" : null}>Yearly</button>
        </div>
      </div>
      <div className="PricingSection-slides-container">
        <div className="price-plan-container">
          <div className="price-plan-heading">Free Plan</div>
          <div className="prices-plan-prices">
            <p>$0</p>
            <sub>/month</sub>
          </div>
          <div className="prices-plan-available-Features">
            <div>
              <p>Available Features</p>
              <div className="prices-plan-features">
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Access to selected free courses.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Limited course materials and resources.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Basic community support.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>No certification upon completion.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Ad-supported platform.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faX} />
                  </div>
                  <p>Access to exclusive Pro Plan community forums.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faX} />
                  </div>
                  <p>Early access to new courses and updates.</p>
                </div>
              </div>
            </div>
            <NavLink to="/Skillbridge-login"> Get Started</NavLink>
          </div>
        </div>
        <div className="price-plan-container">
          <div className="price-plan-heading">Pro Plan</div>
          <div className="prices-plan-prices">
            <p>${pricPlanToggle ? "840" : "79"}</p>
            <sub>{pricPlanToggle ? "/Year" : "/Month"}</sub>
          </div>
          <div className="prices-plan-available-Features">
            <div>
              <p>Available Features</p>
              <div className="prices-plan-features">
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Unlimited access to all courses.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Unlimited course materials and resources.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Priority support from instructors.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Course completion certificates.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Ad-free experience.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Access to exclusive Pro Plan community forums.</p>
                </div>
                <div>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p>Early access to new courses and updates.</p>
                </div>
              </div>
            </div>
            <NavLink to="/Skillbridge-login">Get Started</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
