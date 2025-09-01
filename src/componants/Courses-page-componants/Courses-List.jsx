import React from "react";
import CoursesListTemplate from "./CoursesListTemplate";
import Courses from "../CoursesData";
import "./Courses-desktop-styles.css"
import "./Courses-laptop-styles.css"
import "./Courses-phone-styles.css"

function CoursesList() {

    const courseSlide = Courses.map((ele) => {
        return (
          <CoursesListTemplate
            key={ele.id}
            paragraphClassName="courses-list-paragraph"
            courseImage ={ele.courseImage}
            courseImageClassName="courses-list-image"
            coursTime={ele.coursTime}
            courseLevel={ele.courseLevel}
            profsoerName={ele.profsoerName}
            heading={ele.heading}
            paragriph={ele.paragriph}
            slidsButtonContainerClassName="view-course-button-container"
            slidsButtonClassName="view-course-button"
            buttonName="View Course"
            courseDetailes={ele.courseDetailes}
            sublistCurriculum="curriculum"
            sublistCurriculumContainer="curriculum-container"
            infoSubContainer="info-sub-container"
            link={`${ele.heading}`}
          />
        );
      });
    return(
        <div className="courses-list-container">
            {courseSlide}
        </div>
    )
}

export default CoursesList;