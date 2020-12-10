import React from 'react';
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom"
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

function App() {
    // function getPage() {
    //     const route = window.location.pathname;
    //     if (route === '/about') return <AboutPage/>;
    //     if (route === '/courses') return <CoursesPage/>;
    //     return <HomePage/>
    // }

    return (<div className='container-fluid'>
        <Header/>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/courses' component={CoursesPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/course/:slug' component={ManageCoursePage} />
            <Redirect from="/about-page" to="/about"/>
            <Route component={NotFoundPage} />
            }
        </Switch>

    </div>)

}


export default App;
