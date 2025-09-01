import React from "react";
import "../home-desktop-styles/BenefitsSection.css";
import "../home-laptop-styles/BenefitsSection.css";
import "../home-phone-styles/BenefitsSection.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Template from "./Templat";
import { NavLink } from "react-router-dom";

function BenefitsSection() {
  // eslint-disable-next-line
  const benefits = [
    {
      id: 1,
      heading: "Flexible Learning Schedule",
      paragriph:
        "Fit your coursework around your existing commitments and obligations.",
    },
    {
      id: 2,
      heading: "Expert Instruction",
      paragriph:
        "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      id: 3,
      heading: "Diverse Course Offerings",
      paragriph:
        "Explore a wide range of design and development courses covering various topics.",
    },
    {
      id: 4,
      heading: "Updated Curriculum",
      paragriph:
        "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      id: 5,
      heading: "Practical Projects and Assignments",
      paragriph:
        "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      id: 6,
      heading: "Interactive Learning Environment",
      paragriph:
        "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];

  const [theSize, setTheSize] = React.useState(window.innerWidth);
  const [theData, setTheData] = React.useState(benefits);
  const medeiaQuery = window.matchMedia("(max-width: 400px)");

  React.useEffect(() => {
    function resizeFunc() {
      setTheSize(window.innerWidth);
      if (medeiaQuery.matches) {
        for (let i = 0; i < 2; i++) {
          if (theData.length > 4) {
            theData.pop();
            setTheData(theData);
          }
        }
      } else {
        setTheData(benefits);
      }
    }
    window.addEventListener("resize", resizeFunc);
    window.addEventListener("load", resizeFunc);
    return function () {
      //for cleanning up the code from sides effects
      window.removeEventListener("resize", resizeFunc);
    };
  }, [theSize, theData, medeiaQuery, benefits]);

  const benefitsSlide = theData.map((ele) => {
    return (
      <Template
        key={ele.id}
        id={ele.id}
        paragraphClassName="benefits-slids-paragraph"
        heading={ele.heading}
        paragriph={ele.paragriph}
        slidsButtonContainerClassName="benefits-slids-button-container"
        slidsButtonClassName="benefits-slids-button"
        icon={faArrowRight}
        parm={`${ele.heading}`}
        link="benefits"
      />
    );
  });
  return (
    <div className="benefits-section-container">
      <div>
        <div className="benefits-top-header">
          <p>Benefits</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras dignissim lorem nibh et. Ac cum eget
            habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="view-all-courses">
          <NavLink>View All</NavLink>
        </div>
      </div>
      <div className="benefits-slides-container">{benefitsSlide}</div>
    </div>
  );
}

export default BenefitsSection;
