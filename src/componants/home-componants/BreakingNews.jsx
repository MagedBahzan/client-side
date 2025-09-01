import React from "react";
import "../home-desktop-styles/breakingNews.css";
import "../home-laptop-styles/breakingNews.css";
import "../home-phone-styles/breakingNews.css";
import Template from "./Templat";
import Courses from "../CoursesData";
import { NavLink } from "react-router-dom";

function BreakingNews() {
  const courseSlide = Courses.map((ele) => {
    return (
      <Template
        key={ele.id}
        paragraphClassName="courses-slids-paragraph"
        courseImage={ele.courseImage}
        courseImageClassName="courses-section-image"
        coursTime={ele.coursTime}
        courseLevel={ele.courseLevel}
        profsoerName={ele.profsoerName}
        heading={ele.heading}
        paragriph={ele.paragriph}
        slidsButtonContainerClassName="courses-slids-button-container"
        slidsButtonClassName="courses-slids-button"
        buttonName="Get it now"
        parm={`${ele.heading}`}
        link="courses"
      />
    );
  });
  return (
    <div className="courses-section-container">
      <div>
        <div className="courses-top-header">
          <p>Breaking news</p>
        </div>
        <div className="view-all-courses">
          <NavLink to="courses">View All</NavLink>
        </div>
      </div>
      <div className="courses-slides-container">{courseSlide}</div>
    </div>
  );
}

export default BreakingNews;
