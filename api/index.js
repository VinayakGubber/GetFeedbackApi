const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
      <h1 style="color: #4CAF50;"> Welcome to <em>FeedbackAPI</em>!</h1>
      <p>Use the following endpoints to access teacher-given feedback:</p>
      <ul>
        <li><code>/random</code> | Get a random feedback entry</li>
         <p><strong>Click the link :- </strong> <a href="https://your-vercel-deployment-url.vercel.app/random" target="_blank">Get a random feedback</a></p>
        <li><code>/feedbacks</code> | View all feedback</li>
         <p><strong>Click the link :- </strong> <a href="https://your-vercel-deployment-url.vercel.app/feedbacks" target="_blank">View all feedback</a></p>
        <li><code>/feedbacks?email=student@example.com</code> | Filter by student email</li>
      </ul>
      <p><strong>Source Code:</strong> <a href="https://github.com/VinayakGubber/GetFeedbackApi" target="_blank">GitHub Repository</a></p>
    </div>
    `);
});

app.get("/random", (req, res) => {
  const feedbackPath = path.resolve(__dirname, "../feedback.json");
  const feedbacks = JSON.parse(fs.readFileSync(feedbackPath, "utf8"));
  const random = feedbacks[Math.floor(Math.random() * feedbacks.length)];
  res.json(random);
});

app.get("/feedbacks", (req, res) => {
  const feedbackPath = path.resolve(__dirname, "../feedback.json");
  const feedbacks = JSON.parse(fs.readFileSync(feedbackPath, "utf8"));
  const { email } = req.query;

  if (email) {
    const filtered = feedbacks.filter(
      (fb) => fb.email.toLowerCase() === email.toLowerCase()
    );
    return res.json(filtered);
  }

  res.json(feedbacks);
});

module.exports = app;
