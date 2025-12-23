import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "author",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
  e.preventDefault();

  if (!formData.username || !formData.password) {
    toast.error("All fields are required");
    return;
  }

  try {
    await axios.post(`/api/author/`,formData);
    toast.success("Registration Successful!");

    setFormData({
      username: "",
      password: "",
      role: "author",
    });

    setTimeout(() => {
      navigate("/login");
    }, 1500);

  } catch (err) {
    toast.error("Registration failed");
    console.error(err.response?.data);
  }
};


  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <ToastContainer />

      <div className="col-md-4 shadow p-4 bg-white rounded">
        <h2 className="text-center fw-bold mb-4">Register</h2>

        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              value={formData.username}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Role</label>
            <select
              name="role"
              className="form-control"
              value={formData.role}
              onChange={changeHandler}
            >
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="btn btn-primary w-100 mt-3">
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-decoration-none fw-semibold">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
