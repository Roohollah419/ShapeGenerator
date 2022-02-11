import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/old">old version</Link>
                </li>
                <li>
                    <Link to="/new">new version</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
