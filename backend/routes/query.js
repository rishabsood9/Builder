import { Router } from "express";
import nodemailer from "nodemailer";
import { formateData } from "../app.js";
import Query from "../models/query.js";

const queryRouter = Router();

queryRouter.post("/add", async (req, res) => {
  const { fullName, email, phone } = req.body;
  try {
    const response = await Query.create({
      fullName,
      email,
      phone,
    });
    const data = formateData(response);
    return res.send(data);
  } catch (e) {
    throw res.status(400, e);
  }
});

queryRouter.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Configure the email transport using Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail", // Using Gmail, you can configure other services or SMTP if needed
    auth: {
      user: process.env.EMAIL_USER, // Store in environment variable
      pass: process.env.EMAIL_PASS, // Store in environment variable
    },
  });

  const mailOptions = {
    from: email,
    to: "soodrishab91@gmail.com", // Your email
    subject: `New message from ${name}`,
    text: `You have received a new message from your website contact form.\n\nDetails:\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      // res.status(200).send("Email sent successfully");
      const data = formateData(info.response);
      res.send(data);
    }
  });
});

export default queryRouter;
