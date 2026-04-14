import { useState } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/signin", form);
      alert(res.data.message);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Travel Blog</h1>
        <p>Signin first, then enter the main travel page and explore destinations.</p>
      </div>

      <div className="auth-right">
        <form className="form-box" onSubmit={handleSignin}>
          <h1>Signin</h1>

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

          <button type="submit">Signin</button>

          <p className="auth-switch">
            Don&apos;t have an account? <Link to="/">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;