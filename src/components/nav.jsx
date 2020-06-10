import React from "react";
import {Link} from "react-router-dom";
function Nav(props) {
    return(
        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </ul>
            </nav>
        </div>
        );
};

export default Nav;