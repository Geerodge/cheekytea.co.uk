import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logo.png";
import NavStyles from "../styles/NavStyles";

export default function Nav() {
    // Hides mobile menu on menu click
    const [checked, setChecked] = useState(false);

    const toggleMenu = () => {
        setChecked(!checked);
    };
    
    return (
    <NavStyles>
        <nav>
            <div className="outer-wrapper">
                <Link to="/" className="logo-nav"><img src={logo} alt="logo" id="logo"/></Link>
            </div>
            <input className="menu-btn" type="checkbox" id="menu-btn" checked={checked} onChange={toggleMenu} />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu" onClick={toggleMenu} onKeyDown={toggleMenu} role="button">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/shop">Tea Shop</Link>
                </li>
                <li>
                    <Link to="/"><img src={logo} alt="logo" id="logo"/></Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </NavStyles>
    );
}