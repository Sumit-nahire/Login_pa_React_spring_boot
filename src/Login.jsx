import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login({ onCreateUser, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/api/users/login",
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        alert("Login Successful");

        onLoginSuccess(res.data);

        navigate("/welcome");
      })
      .catch(() => {
        alert("Invalid Email or Password");
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login Page</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Login
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCreateUser}
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
