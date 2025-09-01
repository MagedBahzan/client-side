import React from "react";
import CoursesList from "./componants/Courses-page-componants/Courses-List";
import CoursesPageHeader from "./componants/Courses-page-componants/Courses-page-header";

function CoursesPage() {
    return(
        <div className="Courses-page">
                <CoursesPageHeader />
                <CoursesList />
        </div>
    )
}
export default CoursesPage;