import React from "react";
import { useParams } from "react-router-dom";
import Courses from "./componants/CoursesData";
import "./CourseDetailesStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import PageHeaderTemplate from "./componants/Courses-page-componants/Courses-page-header";

function CoursesDetailesPage() {
  const param = useParams();
  console.log(param.id);
  const [courseData, setCourseData] = React.useState(null);
  const [coursedescription, setCoursedescription] = React.useState(null);

  React.useEffect(() => {
    const selctedCourse = Courses.filter((ele) => ele.heading === param.id);
    setCourseData(selctedCourse[0]);
    setCoursedescription(selctedCourse[0].courseDetailes[0].description);
  }, [param.id]);

  const courseinnerDetailes = coursedescription ? (
    coursedescription.map((ele) => {
      return (
        <div key={ele.id}>
          <div className="course-Feature-Items-title">
            <p>{ele.title}</p>
            <p>{ele.path}</p>
          </div>
          <div>
            <p>
              <FontAwesomeIcon icon={faClock} />
              &nbsp;
              {ele.time > 60 ? Math.round(ele.time/60) : ele.time} &nbsp;{ele.time <= 60 ? "Minutes" : "Hour"}
            </p>
          </div>
        </div>
      );
    })
  ) : (
    <h3>...Laoding</h3>
  );

  const courseDetailes = courseData ? (
    courseData.courseDetailes.map((ele) => {
      return (
        <div key={ele.id} className="course-list-card">
          <div>
            <p>0{ele.level}</p>
          </div>
          <div className="course-list-card-head">
            <p>{ele.head}</p>
          </div>
          <div className="course-Feature-Items">{courseinnerDetailes}</div>
        </div>
      );
    })
  ) : (
    <h3>...Laoding</h3>
  );

  return (
    <div className="course-detailes-page">
      {courseData ? (
        <>
          <div>
            <PageHeaderTemplate
              heading={courseData.heading}
              paragriph={courseData.paragriph}
            />
          </div>

          <div className="course-detailes-list">
            {courseDetailes ? courseDetailes : null}
          </div>
        </>
      ) : (
        <h3>...Loading</h3>
      )}
    </div>
  );
}

export default CoursesDetailesPage;
