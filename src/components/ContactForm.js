import React, { useState } from "react";
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

const ContactForm = () => {
  const [status, setStatus] = useState("Send Message");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, tel, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      tel: tel.value,
      message: message.value,
    };
    let response = await fetch("/:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send Message");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <ContactFormStyles>
        <form onSubmit={handleSubmit}>
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
  );
};

export default ContactForm;