import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/falcons">Falcons</NavLink></li>
            <li><NavLink to="/lions">Lions</NavLink></li>
            <li><NavLink to="/snakes">Snakes</NavLink></li>
        </ul>
    </nav>
);

export default Nav;