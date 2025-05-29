import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page not found!</h1>
      <button onClick={() => navigate("/login")}>Get Back to Login Page</button>
    </div>
  );
};

export default PageNotFound;
