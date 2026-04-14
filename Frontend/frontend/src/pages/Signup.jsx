import { useState } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/signup", form);
      alert(res.data.message);
      navigate("/signin");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Travel Blog</h1>
        <p>Explore the world with beautiful destinations and travel memories.</p>
      </div>

      <div className="auth-right">
        <form className="form-box" onSubmit={handleSignup}>
          <h1>Signup</h1>

          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />

          <select name="role" value={form.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Signup</button>

          <p className="auth-switch">
            Already have an account? <Link to="/signin">Signin</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;