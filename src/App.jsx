import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route
          path="/login"
          element={
            <Login
              onCreateUser={() => (window.location.href = "/register")}
              onLoginSuccess={handleLoginSuccess}
            />
          }
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={<Register onBack={() => (window.location.href = "/login")} />}
        />

        {/* Welcome Page */}
        <Route
          path="/welcome"
          element={
            isLoggedIn ? (
              <Welcome onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
