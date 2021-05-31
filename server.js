const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    }
  });
  
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel;
    const message = req.body.message; 
    const mail = {
        from: name,
        to: "geerodge@gmail.com",
        subject: "CheekyTea.co.uk Contact Form Submission",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Telephone: ${tel}</p>
                <p>Message: ${message}</p>
                <p>Sent from cheekytea.co.uk</p>`,
    };
contactEmail.sendMail(mail, (error) => {
        if (error) {
        res.json({ status: "ERROR" });
        } else {
        res.json({ status: "Message Sent" });
        }
    });
});