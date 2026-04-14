import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Feedback from "./pages/Feedback";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const hideNavbarPaths = ["/", "/signin", "/admin"];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      {shouldShowNavbar && (
        <nav className="nav-main">
          <ul className="nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact-Us</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>

            {user && (
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;