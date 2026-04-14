import { useEffect, useState } from "react";
import API from "../api";

const Admin = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const getFeedbacks = async () => {
    try {
      const res = await API.get("/admin/feedbacks");
      setFeedbacks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <h2>User Feedbacks</h2>

      <div className="feedback-list">
        {feedbacks.length === 0 ? (
          <p>No feedback yet</p>
        ) : (
          feedbacks.map((item) => (
            <div className="feedback-card" key={item._id}>
              <h3>{item.name}</h3>
              <p><b>Email:</b> {item.email}</p>
              <p><b>Message:</b> {item.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;