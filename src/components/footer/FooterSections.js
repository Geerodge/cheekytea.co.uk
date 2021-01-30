import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"

const FooterStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
    div {
        margin: 40px;
    }
    h3 {
        text-transform: uppercase;
    }
    ul {
        list-style: none;
        line-height: 3rem;
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
                            <Link to="/">Delivery Information</Link>
                        </li>
                        <li>
                            <Link to="/">Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy Policy</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3>Customer Account</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie.</p>
            </div>
            <div>
                <h3>Contact Us</h3>
                <p><FaPhoneAlt style={{ color: "var(--black)" }}/> 0333 333 3333</p>
                <p><HiOutlineMail /> <a href="mailto:hello@cheekytea.co.uk">hello@cheekytea.co.uk</a></p>
            </div>
        </FooterStyles>
    )
}