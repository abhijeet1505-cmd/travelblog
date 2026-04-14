import { useState } from "react";
import API from "../api";

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFeedback = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/feedback", form);
      alert(res.data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert(error.response?.data?.message || "Feedback failed");
    }
  };

  return (
    <div className="form-page">
      <form className="form-box" onSubmit={handleFeedback}>
        <h1>Feedback</h1>
        <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Write your feedback" rows="5" value={form.message} onChange={handleChange}></textarea>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;