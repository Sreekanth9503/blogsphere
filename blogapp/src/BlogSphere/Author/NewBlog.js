import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthorNavbar from "./AuthorNavbar";
import Footer from "../Footer";

const NewBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({title: "", author: "", category: "", description: "", story: "",
  });

  const changeData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev,[name]: value,}));
  };


  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.description ||
      !formData.story
    ) 
    {
      toast.error("Please fill all required fields");
      return;
    }

    axios
      .post(`/api/blogs/`, formData)
      .then(() => {
        toast.success("Blog created successfully!");
        setTimeout(() => {
          navigate(`/author/dashboard/${formData.author}`);
        }, 100);
      })
      .catch((err) => {
        console.error("CREATE BLOG ERROR:", err.response?.data);
        toast.error("Failed to create blog");
      });
  };

  return (
    <>
      <AuthorNavbar />
      <ToastContainer />

      <div className="container py-5">
        <div className="col-md-8 mx-auto shadow p-4 bg-white rounded">
          <h2 className="text-primary text-center fw-bold mb-4">Create New Blog</h2>

          <form onSubmit={submitHandler}>
            <label className="fw-bold mb-1">Author</label>
            <input
              name="author"
              className="form-control mb-3"
              placeholder="Enter author name"
              value={formData.author}
              onChange={changeData}
            />

            <label className="fw-bold mb-1">Title</label>
            <input
              name="title"
              className="form-control mb-3"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={changeData}
            />

            <label className="fw-bold mb-1">Category</label>
            <input
              name="category"
              className="form-control mb-3"
              placeholder="Enter category"
              value={formData.category}
              onChange={changeData}
            />

            <label className="fw-bold mb-1">Description</label>
            <textarea
              name="description"
              className="form-control mb-3"
              rows="2"
              placeholder="Short description"
              value={formData.description}
              onChange={changeData}
            />

            <label className="fw-bold mb-1">Story</label>
            <textarea
              name="story"
              className="form-control mb-4"
              rows="5"
              placeholder="Write your story here..."
              value={formData.story}
              onChange={changeData}
            />

            <button type="submit" className="btn btn-primary w-100">
              Publish Blog
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default NewBlog;
