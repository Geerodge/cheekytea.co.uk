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
    .contact-information {
        text-align: left;
    }
    .phone-mail {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        place-self: center;
        margin: 50px 0;
    }
    form {
        margin: 25px auto 100px auto;
    }
    h2 {
        margin-top: 25px;
    }
    @media only screen and (min-width: 500px) {
        form {
            max-width: 70%;
            margin: 25px auto 100px auto;
        }
    }
    @media only screen and (min-width: 700px) {
        .contact-information {
            max-width: 85%;
            margin: 0 auto;
        }
    }
    @media only screen and (min-width: 800px) {
        .phone-mail {
            margin: 50px 0;
        }
        h2 {
            margin-top: 50px;
        }
        form {
            max-width: 60%;
        }
    }
    @media only screen and (min-width: 900px) {
        .contact-information {
            max-width: 70%;
        }
        form {
            max-width: 50%;
        }
    }
    @media only screen and (min-width: 1200px) {
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .contact-information {
            max-width: 80%;
        }
        h2 {
            margin-top: 0px;
        }
        form {
            max-width: 70%;
        }
    }
`;

export default function ContactPage() {
    return (
        <>
            <ContactStyles>
                <h1>Contact Us</h1>
                <p>Get in touch, we'll be happy to help.</p>
                <hr />
                <div className="container">
                    <div className="contact-information">
                        <p>Contact us via the form on this page or alternativley email us directly.</p>
                        <p>We'll respond within 4 to 5 business days Monday to Friday, but generally faster.</p>
                        <p>For general enquiries please email <a href="mailto:hello@cheekytea.co.uk">hello@cheekytea.co.uk</a>.</p>
                        <p>For new and existing customer orders, or order issues please email <a href="mailto:orders@cheekytea.co.uk">orders@cheekytea.co.uk</a>.</p>
                        <div class="phone-mail">
                            <p><MdLocalPostOffice style={{ color: "var(--black)" }} /><br /> 93 Barley Leaze,<br /> Chippenham<br /> SN14 6GW</p>
                            <p><FaPhoneAlt style={{ color: "var(--black)" }}/><br />Freephone<br /> 0800 292 6064</p>
                        </div>
                    </div>
                    <div>
                        <h2>Contact Form</h2>
                        <ContactForm />
                    </div>
                </div>
            </ContactStyles>
        </>
    )
}