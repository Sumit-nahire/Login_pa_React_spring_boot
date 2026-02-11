import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(
        "http://localhost:8080/api/users/logout",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        alert(res.data);

        onLogout();

        navigate("/login");
      })
      .catch(() => {
        alert("Logout Failed");
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card p-5 shadow text-center">
        <h1 className="mb-3">Welcome 🎉</h1>
        <h4 className="mb-4 text-success">Login Successful</h4>

        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
