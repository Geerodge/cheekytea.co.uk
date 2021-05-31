import React from "react";
import styled from "styled-components";

const ContactFormStyles = styled.div`
    form {
        margin: 0 auto;
        text-align: left;
        input, textarea {
            min-height: 40px;
            margin-bottom: 20px;
            border-style: solid;
            border-width: 1px;
            border-color: var(--green);
            border-radius: 2px;
            background-color: #fafbfc;
            color: var(--black);
            min-width: 100%;
        }
        textarea {
            min-height: 100px;
        }
        button {
            float: right;
        }
    }
`;

export default function ContactForm() {
  <ContactFormStyles>
    <form name="contact">
        <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
        </div>
        <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
        </div>
        <div>
            <label htmlFor="tel">Telephone</label>
            <input type="tel" id="tel" required />
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" required />
        </div>
        <button type="submit">{status}</button>
    </form>
  </ContactFormStyles>
};