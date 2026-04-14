import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/User.js";
import Feedback from "./models/Feedback.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Server running");
});
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      role: role || "user"
    });

    res.status(201).json({
      message: "Signup successful",
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ message: "Signup failed" });
  }
});


app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Signin successful",
      user
    });
  } catch (error) {
    res.status(500).json({ message: "Signin failed" });
  }
});

app.post("/feedback", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !message || !email) {
      return res.status(400).json({ message: "All fields required" });
    }

    const feedback = await Feedback.create({
      name,
      email,
      message
    });

    res.status(201).json({
      message: "Feedback sent successfully",
      feedback
    });
  } catch (error) {
    res.status(500).json({ message: "Feedback failed" });
  }
});

app.get("/admin/feedbacks", async (req, res) => {
  try {
    const allFeedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(allFeedbacks);
  } catch (error) {
    res.status(500).json({ message: "Cannot fetch feedbacks" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});