import React from "react";
//call mock api
import { getCourses }  from '../api/courseApi';
class CoursesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        //promise to get courses from api, when call complete, store the array of courses in the state
        getCourses().then(courses => this.setState({courses: courses}))
    }

    render() {
        return (
            <h1>
                Courses
            </h1>
        )
    }
}

export default CoursesPage
