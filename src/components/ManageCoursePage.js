import React from 'react'
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";


const ManageCoursePage = (props) => {
// debugger;
    return (
        <>
             <h2> Manage Course</h2>
            {/*<Prompt when={true} message="Are you sure you want to leave this page?"></Prompt>*/}
            {/*{props.match.params.slug}*/}
            <p>React is awesome!</p>
            <CourseForm />
        </>
    )
};

export default ManageCoursePage;
