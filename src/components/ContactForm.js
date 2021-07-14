import React, { useEffect, useState } from "react";
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
        p {
            text-align: center;
        }
    }
`;

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
};

export default function ContactForm() {

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes("success=true") ) {
            setSuccess(true);
        }
    }, []);

    return (
        <ContactFormStyles>
            {success && (
                <>
                    <p>Thanks for your message! <span role="img" aria-label="Partying Face">🥳</span></p>
                    <p>We'll be in contact shortly.</p>
                </>
            )}
            <form
                id="contact"
                name="contact"
                method="POST"
                action="/contact/?success=true"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="tel">Telephone</label>
                <input type="tel" id="tel" name="tel" required />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
            </div>
            <button type="submit">Send message</button>
        </form>
        </ContactFormStyles>
    )
};