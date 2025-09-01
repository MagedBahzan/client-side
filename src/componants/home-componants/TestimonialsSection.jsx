import React from "react";
import "../home-desktop-styles/TestimonialsSection.css";
import "../home-laptop-styles/TestimonialsSection.css";
import "../home-phone-styles/TestimonialsSection.css";
import "../home-desktop-styles/CoursesSection.css";
import "../home-laptop-styles/CoursesSection.css";
import "../home-phone-styles/CoursesSection.css";
import Template from "./Templat";
import { NavLink } from "react-router-dom";

function TestimonialsSection() {
  const [theSize, setTheSize] = React.useState(window.innerWidth);
  const [theData, setTheData] = React.useState(false);
  const medeiaQuery = window.matchMedia("(max-width: 400px)");

  React.useEffect(() => {
    function resizeFunc() {
      setTheSize(window.innerWidth);
      if (medeiaQuery.matches) {
        setTheData(true);
      } else {
        setTheData(false);
      }
    }
    window.addEventListener("resize", resizeFunc);
    window.addEventListener("load", resizeFunc);
    return function () {
      //for cleanning up the code from sides effects
      window.removeEventListener("resize", resizeFunc);
    };
  }, [theSize, medeiaQuery, theData]);

  const Testimonials = [
    {
      id: 1,
      avatar: "https://b9.icdn.ru/m/maged-bahzan/8/79020078Mqm.jpg",
      profsoerName: theData ? "J. smith" : "Johon smith",
      paragriph:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    },
    {
      id: 2,
      avatar: "https://b9.icdn.ru/m/maged-bahzan/8/79020078Mqm.jpg",
      profsoerName: theData ? "E. Johnson" : "Emily Johnson",
      paragriph:
        "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    },
    {
      id: 3,
      avatar: "https://b9.icdn.ru/m/maged-bahzan/8/79020078Mqm.jpg",
      profsoerName: theData ? "D. Brown" : "David Brown",
      paragriph:
        "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    },
    {
      id: 4,
      avatar: "https://b9.icdn.ru/m/maged-bahzan/8/79020078Mqm.jpg",
      profsoerName: theData ? "S. Thompson" : "Sarah Thompson",
      paragriph:
        "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    },
  ];

  const TestimonialsSlide = Testimonials.map((ele) => {
    return (
      <Template
        key={ele.id}
        avatar={ele.avatar}
        avatarClassName="Testimonials-avatar"
        paragraphClassName="courses-slids-paragraph"
        avatarContanerClassName="avatar-contianer"
        profsoerName={ele.profsoerName}
        paragriph={ele.paragriph}
        slidsButtonContainerClassName="Testimonials-slids-button-container"
        slidsButtonClassName="Testimonials-slids-button"
        buttonName="Read Full Story"
      />
    );
  });
  return (
    <div className="courses-section-container Testimonials-section-container">
      <div>
        <div className="courses-top-header">
          <p>Our Testimonials</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="view-all-courses">
        <NavLink>View All</NavLink>
        </div>
      </div>
      <div className="Testimonials-slides-container">{TestimonialsSlide}</div>
    </div>
  );
}

export default TestimonialsSection;
