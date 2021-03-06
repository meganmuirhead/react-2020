import React, {useEffect, useState} from "react";
import {getCourses} from "../api/courseApi";
import CourseList from "./CourseList";
import {Link} from "react-router-dom";

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
            <Link to='/course' className="btn btn-primary">Add Course</Link>
            <CourseList
                courses={courses}
            />
        </>
    );

};

export default CoursesPage;
