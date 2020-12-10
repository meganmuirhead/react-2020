import React, {useState} from 'react'
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from 'react-toastify';
const ManageCoursePage = (props) => {
// debugger;
    console.log(props, 'props')

    const [errors, setError] = useState({})

        const [course, setCourseInput] = useState({
        id: null,
        slug: '',
        authorId: '',
        category: ''
    });

    function formIsValid() {
        const localErrors = {};
        if(!course.title) localErrors.title = "Title is required";
        if(!course.authorId) localErrors.authorId = "Author id is required";
        if(!course.category) localErrors.category = "Category is required";
        setError(localErrors);
        return Object.keys(localErrors).length === 0;

    }
    function handleChange(event) {
        const updatedCourse = {
            ...course,
            [event.target.name]: event.target.value
        };
        setCourseInput(updatedCourse)
    }

    function handleFormSubmit(event) {
        // event.preventDefault();
        console.log(props, 'props')

        if(!formIsValid()) return;

        courseApi.saveCourse(course).then(() => {
            console.log('saving');
            props.history.push("/courses");

            const notify = () => toast("Wow so easy !");

            toast.success("Course Saved!");
            notify();

        });
    }

    return (
        <>
            <h2> Manage Course</h2>
            {/*<Prompt when={true} message="Are you sure you want to leave this page?"></Prompt>*/}
            {/*{props.match.params.slug}*/}
            <p>React is awesome!</p>
            <CourseForm
                errors={errors}
                course={course}
                onChange={handleChange}
                onSubmit={handleFormSubmit}
            />
        </>
    )
};

export default ManageCoursePage;
