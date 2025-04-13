import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import Dashboard from "./Dashboard";
import PageNotFound from "./PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import RefreshHandler from "./RefreshHandler";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="720372230017-t4920agusgmbq0vo14pm374vl86sjj92.apps.googleusercontent.com">
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    );
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/Dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
