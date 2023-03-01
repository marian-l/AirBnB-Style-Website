import React from "react";
import Logo from "../images/Airbnb_Logo.svg.png"

function NavBar() {
    return (
        <div className="nav"> 
            <img src={Logo} className="nav--logo"></img>
        </div>
    )
}

export default NavBar;
