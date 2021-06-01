import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"

const FooterStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    div {
        margin: 20px;
    }
    h3 {
        text-transform: uppercase;
    }
    ul {
        list-style: none;
        line-height: 4rem;
        margin-top: 20px;
    }
    a {
      text-decoration: none;
      color: var(--black);
      text-decoration: underline;
      &:hover {
          color: var(--green);
          cursor: pointer;
          transition: all 0.2s ease-in-out;
      }
    }
    @media only screen and (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        div {
            margin: 25px;
        }
    }
    @media only screen and (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        div {
            margin: 20px;
        }
    }
`;


export default function FooterSections() {
    return (
        <FooterStyles>
            <div>
                <h3>Cheeky Tea</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/shop">Tea Shop</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3>Helpful Information</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="/shipping-policy">Delivery Information</Link>
                        </li>
                        <li>
                            <Link to="/terms-and-conditions">Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3>Customer Account</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="#" className="snipcart-customer-signin">My Account</Link>
                        </li>
                        <li>
                            <Link to="#" className="snipcart-checkout">View Basket</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3>Contact Us</h3>
                <p><FaPhoneAlt style={{ color: "var(--black)" }}/> 0800 292 6064</p>
                <p><HiOutlineMail /> <a href="mailto:hello@cheekytea.co.uk">hello@cheekytea.co.uk</a></p>
            </div>
        </FooterStyles>
    )
}