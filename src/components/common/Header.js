import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {

    const activeStyle = { color: "lightcoral"}
   return (
       <nav>
           <NavLink exact to="/" activeStyle={activeStyle}>
               Home Page
           </NavLink>
           {" | "}
           <NavLink to="/courses" activeStyle={activeStyle}>
               Courses Page
           </NavLink>
           {" | "}
           <NavLink to="/about" activeStyle={activeStyle}>
               About Page
           </NavLink>


       </nav>
   )
}

export default Header;
