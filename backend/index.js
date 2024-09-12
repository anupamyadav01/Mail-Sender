import express from "express";
import nodemainer from "nodemainer";
const app = express();
const port = 4000;

const transporter = nodemainer.createTransport({
  service: "gmail",
});

app.post("/api/send-mail", (req, res) => {
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
