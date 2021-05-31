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

// const ContactForm = () => {
//   const [status, setStatus] = useState("Send Message");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, tel, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       tel: tel.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Send Message");
//     let result = await response.json();
//     alert(result.status);
//   };

export default function ContactForm() {
  return (
    <ContactFormStyles>
  
        {/* A little help for the Netlify bots if you're not using a SSG */}
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>

        <form name="contact" method="post">
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
            <button type="submit">Send Message</button>
        </form>
    </ContactFormStyles>
  );
};