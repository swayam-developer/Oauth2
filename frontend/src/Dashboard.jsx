import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  return (
    <div className="container dashboard-container">
      <h1>Welcome {userInfo?.name}</h1>
      <h3>Email: {userInfo?.email}</h3>
      <img src={userInfo?.image} alt={userInfo?.email} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
