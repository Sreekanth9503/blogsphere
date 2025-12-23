import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [loginType, setLoginType] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (loginType === "author") {
      axios.get(`/api/author/`)
        .then((res) => {
          const validUsers = res.data.filter(
            (u) => u.username && u.password
          );

          const matchedUser = validUsers.find(
            (u) =>
              u.username.toLowerCase() === username.toLowerCase() &&
              u.password === password
          );

          if (matchedUser) {
            navigate(`/author/dashboard/${matchedUser.username}`);
          } else {
            alert("Invalid Author Username or Password");
          }
        });
      return;
    }

    if (loginType === "admin") {
      if (username === "admin" && password === "admin123") {
        navigate("/admin/dashboard");
      } else {
        alert("Invalid Admin Credentials");
      }
    }
  };

  return (
    <div className="container-fluid loginpage d-flex justify-content-center align-items-center">
      <div className="col-10 col-lg-4 p-4 border rounded-2 bg-white">

        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn me-2 ${loginType === "admin" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setLoginType("admin")}
          >
            Admin
          </button>

          <button
            className={`btn ${loginType === "author" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setLoginType("author")}
          >
            Author
          </button>
        </div>

        <h3 className="text-center fw-bold mb-3">
          {loginType === "admin" ? "Admin Login" : "Author Login"}
        </h3>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-center align-items-center mt-2 mb-3 fw-medium">
            <a href="/forgot-password" className="text-decoration-none me-2">
              Forgot Password?
            </a>
            <span className="mx-2">|</span>
            <a href="/register" className="text-decoration-none fw-semibold">
              Register
            </a>
          </div>

          <button className="btn btn-primary w-50 mx-auto d-block mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
