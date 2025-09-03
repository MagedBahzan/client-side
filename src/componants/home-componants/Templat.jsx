import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

function Template(props) {
  return (
    <div key={props.id}>
      {props.courseImage ? (
        <div className={props.courseImageClassName}>
          <img src={props.courseImage} alt="Not found" />
          <div>
            <div>
              <div>{props.coursTime}</div>
              <img
                src={props.avatar}
                alt="Not found"
              />
              <div>{props.courseLevel}</div>
            </div>
            <div>{props.profsoerName}</div>
          </div>
        </div>
      ) : props.id ? (
        <p>{`0${props.id}`}</p>
      ) : (
        <div>
          <p>{props.paragriph}</p>
        </div>
      )} 
      {props.heading ? (
        <div className={props.paragraphClassName}>
          <p>{props.heading}</p>
          <p>{props.paragriph}</p>
        </div>
      ) : (
        <div>
          <div className={props.avatarContanerClassName}>
            <div className={props.avatarClassName}>
              <img
                src={props.avatar}
                alt="Not found"
              />
              <p>{props.profsoerName}</p>
            </div>
          </div>
          <button className={props.slidsButtonClassName}>
            {props.icon ? (
              <FontAwesomeIcon icon={props.icon} />
            ) : (
              props.buttonName
            )}
          </button>
        </div>
      )}
      </div>
  );
}

export default Template;
