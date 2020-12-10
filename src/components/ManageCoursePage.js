import React, {useState} from 'react'
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";


const ManageCoursePage = (props) => {
// debugger;
    const [courseInput, setCourseInput] = useState({
        id: null,
        slug: '',
        authorId: '',
        category: ''
    });

    function handleChange(event) {
        const updatedCourse = {
            ...courseInput,
            [event.target.name]: event.target.value
        };
        setCourseInput(updatedCourse)
    }
    return (
        <>
             <h2> Manage Course</h2>
            {/*<Prompt when={true} message="Are you sure you want to leave this page?"></Prompt>*/}
            {/*{props.match.params.slug}*/}
            <p>React is awesome!</p>
            <CourseForm course={courseInput} onChange={handleChange}/>
        </>
    )
};

export default ManageCoursePage;
