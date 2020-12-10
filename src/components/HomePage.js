import React from "react";
import {Link} from "react-router-dom";


function HomePage() {

    return (
        <div className='jumbotron'>
            <h1>Megan's Site</h1>
            <p>This app has react, flux and react router for ultra-responsive web apps!</p>
            <Link to='about' className="btn btn-primary">About</Link>
        </div>
    );
}

export default HomePage;
