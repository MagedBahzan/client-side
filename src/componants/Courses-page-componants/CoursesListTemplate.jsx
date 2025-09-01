import React from "react";
import { NavLink } from "react-router-dom";

function CoursesListTemplate(props) {
  const subList = props.courseDetailes.map((ele) => {
    return (
      <div key={ele.id} className={props.sublistCurriculum}>
        <p>0{ele.level}</p>
        <p>{ele.head}</p>
      </div>
    );
  });
  return (
    <div key={props.id}>
      <div className={props.paragraphClassName}>
        <div>
          <p>{props.heading}</p>
          <p>{props.paragriph}</p>
        </div>
        <div className={props.slidsButtonContainerClassName}>
          <NavLink to={props.link} className={props.slidsButtonClassName}>
            {props.buttonName}
          </NavLink>
        </div>
      </div>
      <div className={props.courseImageClassName}>
        {/*Replace these images with anoter using maping from an api*/}
        <div>
          <img src={props.courseImage} alt="Not found" />
          <img src={props.courseImage} alt="Not found" />
          <img src={props.courseImage} alt="Not found" />
        </div>
        <div className={props.infoSubContainer}>
          <div>
            <p>{props.coursTime}</p>
            <p>{props.courseLevel}</p>
          </div>
          <p>{props.profsoerName}</p>
        </div>
      </div>
      <div className={props.sublistCurriculumContainer}>
        <p>Curriculum</p>
        <div>{subList}</div>
      </div>
    </div>
  );
}

export default CoursesListTemplate;
