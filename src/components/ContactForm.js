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
  return (
    <ContactFormStyles>
      <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="contact" value="contact" />
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
          <div>
              <div data-netlify-recaptcha="true"></div>
          </div>
          <button type="submit">Send Message</button>
      </form>
    </ContactFormStyles>
  )
};