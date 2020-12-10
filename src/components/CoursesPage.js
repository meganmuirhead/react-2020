import React, {useEffect, useState} from "react";
import {getCourses} from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
    }, [])

    // courses is smart comp
    // courselist is dumb :)
    return (
        <>
            <h2>Courses</h2>
            <CourseList
                courses={courses}
            />
        </>
    );

}

export default CoursesPage;
