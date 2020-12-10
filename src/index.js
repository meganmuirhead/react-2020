import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {render} from 'react-dom';
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom"

//entry point for app
render(<Router>
            <App />
        </Router>, document.getElementById('root'))
