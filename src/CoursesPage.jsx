import React from "react";
import CoursesList from "./componants/Courses-page-componants/Courses-List";

function CoursesPage() {
  const [theApiData, setTheApiData] = React.useState({});
  React.useEffect(function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (this.responseText === undefined) {
        setTheApiData(null);
      } else {
        setTheApiData(JSON.parse(this.responseText).data);
      }
    };
    xhttp.open("GET", "http://127.0.0.1:8000/api/v1/main/news", true);
    xhttp.send();
  }, []);
  console.log(theApiData ? theApiData.allDocs : null);
  return (
    <div className="Courses-page">
      <CoursesList />
    </div>
  );
}
export default CoursesPage;
