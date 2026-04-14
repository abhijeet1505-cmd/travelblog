import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: String,
    message: String,
    email: String
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;