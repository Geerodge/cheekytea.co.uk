import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";

const ContactStyles = styled.div`
    text-align: center;
    margin-top: 50px;
    hr {
        width: 70%;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    label {
        display: block;
        padding-bottom: 10px;
        text-align: left;
    }
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        padding: 40px 80px;
    }
    .contact-information {
        text-align: left;
        ul {
            list-style: none;
        }
        li {
            padding: 10px;
        }
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
    .phone-mail {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        text-align: center;
        padding: 50px;
    }
`;


export default function ContactPage() {
    return (
        <>
            <ContactStyles>
                <h1>Contact Page</h1>
                <p>Get in touch, we'll be happy to help.</p>
                <hr />
                <div className="container">
                    <div className="contact-information">
                        <p>Contact us via the form or alternativley email us directly via the correct channel below.</p>
                        <p>We'll respond within 4 to 5 business days Monday to Friday, but generally faster.</p>
                        <p>For general enquiries please email <a href="mailto:hello@cheekytea.co.uk">hello@cheekytea.co.uk</a>.</p>
                        <p>For new and existing customer orders, or order issues please email <a href="mailto:orders@cheekytea.co.uk">orders@cheekytea.co.uk</a>.</p>
                        <div class="phone-mail">
                            <p><MdLocalPostOffice style={{ color: "var(--black)" }} /><br /> 93 Barley Leaze, Chippenham SN14 6GW</p>
                            <p><FaPhoneAlt style={{ color: "var(--black)" }}/><br />Call us on<br /> 0333 333 3333</p>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </ContactStyles>
        </>
    )
}