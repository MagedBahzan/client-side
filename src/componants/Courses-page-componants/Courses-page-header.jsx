import React from "react";
import "./Courses-desktop-styles.css";
import "./Courses-laptop-styles.css";
import "./Courses-phone-styles.css";

function PageHeaderTemplate(props) {
  return (
    <div className="Courses-page-header">
      {props.heading ? (
        <p>{props.heading} Course</p>
      ) : (
        <p>Online Courses on Design and Development</p>
      )}
      {props.paragriph ? (
        <p>{props.paragriph}</p>
      ) : (
        <p>
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      )}
    </div>
  );
}

export default PageHeaderTemplate;
