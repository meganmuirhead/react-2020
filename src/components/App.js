import React from 'react';
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom"
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    // function getPage() {
    //     const route = window.location.pathname;
    //     if (route === '/about') return <AboutPage/>;
    //     if (route === '/courses') return <CoursesPage/>;
    //     return <HomePage/>
    // }
    const notify = () => toast("Wow so easy !");


    return (<div className='container-fluid'>
        <ToastContainer />

        <Header/>
        <Switch>

            <Route path='/' exact component={HomePage} />
            <Route path='/courses' component={CoursesPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/course/:slug' component={ManageCoursePage} />
            <Route path='/course/' component={ManageCoursePage} />
            <Redirect from="/about-page" to="/about"/>
            <Route component={NotFoundPage} />
            }
        </Switch>
        <button onClick={notify}>Notify !</button>

    </div>)

}


export default App;
