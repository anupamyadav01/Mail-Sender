import express from "express";
import nodemailer from "nodemailer";
const app = express();
const port = 4000;
import dotenv from "dotenv";
import cors from "cors";

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);

dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anupamy571@gmail.com",
    pass: process.env.G_PASSWORD,
  },
});

app.post("/api/send-mail", (req, res) => {
  console.log(req.body);
  const { senderEmail, recieversEmail, subject, message } = req.body;

  const mailOptions = {
    from: senderEmail,
    to: recieversEmail,
    subject: subject,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, res) => {
    if (error) {
      console.log("Error occurred:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  });

  try {
    res.send({
      sucess: true,
      message: "Send Mail API called",
    });
  } catch (error) {
    console.log("Error->>>", error);
  }
});

app.listen(port, () => {
  console.log("Server is running on port no. " + port);
});
