import React from "react";
import "../home-desktop-styles/breakingNews.css";
import "../home-laptop-styles/breakingNews.css";
import "../home-phone-styles/breakingNews.css";
import Template from "./Templat";
// import newsData from "../CoursesData";
// import { NavLink } from "react-router-dom";

function BreakingNews() {

  const [newsData, setTheApiData] = React.useState({});
  let categoryEle = [];
  React.useEffect(function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (this.responseText === undefined) {
        setTheApiData(null);
      } else {
        setTheApiData(JSON.parse(this.responseText).data.allDocs);
      }
    };
    xhttp.open("GET", "http://127.0.0.1:8000/api/v1/main/news", true);
    xhttp.send();
  }, []);
  
  function categoryList() {
    if (newsData.length > 0 && newsData) {
      newsData.map((val) =>
        !categoryEle.includes(val.category)
          ? categoryEle.push(val.category)
          : null
      );
    }
  }
  categoryList()

  console.log(newsData);
  console.log(newsData);

  const newsSlide = newsData.length > 0 && newsData ? newsData.map((ele) => {
    return (
      <Template
        key={ele.id}
        paragraphClassName="courses-slids-paragraph"
        courseImage={ele.imgSrc}
        courseImageClassName="courses-section-image"
        author={ele.author[0].name}
        courseLevel={ele.category}
        avatar={ele.author[0].avatar}
        avatarClassName="avatarClassName"
        paragriph={ele.description}
        slidsButtonContainerClassName="courses-slids-button-container"
        slidsButtonClassName="courses-slids-button"
        buttonName="Show more"
        // parm={`${ele.heading}`}
        link="courses"
      />
    );
  }) : null;
  return (
  //   <div className="courses-section-container">
  //     <div>
  //       <div className="courses-top-header">
  //         <p>Breaking news</p>
  //       </div>
  //       <div className="view-all-courses">
  //         <NavLink to="courses">View All</NavLink>
  //       </div>
  //     </div>
      <div className="courses-slides-container">{newsSlide}</div>
  //   </div>
  );
}

export default BreakingNews;
