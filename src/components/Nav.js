import React from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logo.png";
import NavStyles from "../styles/NavStyles";

export default function Nav() {
    
    return (
    <NavStyles>
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/shop">Tea Shop</Link>
                </li>
                <li>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
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