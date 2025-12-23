import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import AuthorNavbar from "./AuthorNavbar";
import MainCarousel from "../MainCarousel";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Footer";

const AuthorDashboard = () => {
  const { author } = useParams();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({ id: "", title: "", category: "", description: "", story: "", });

  useEffect(() => {
    axios.get("/api/blogs/")
      .then((res) => {
        const filtered = res.data.filter(
          (blog) => blog.author.toLowerCase() === author.toLowerCase()
        );
        setBlogs(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [author]);

  const changeData = (blog) => {
    setCurrentBlog(blog);
    setShowModal(true);
  };

  const updateBlog = (e) => {
    e.preventDefault();
    axios.put(`/api/blogs/${currentBlog.id}/`, currentBlog)
      .then(() => {
        toast("Blog updated successfully!");
        setShowModal(false);
        setBlogs((prev) =>
          prev.map((b) => (b.id === currentBlog.id ? currentBlog : b))
        );
      })
      .catch(() => alert("Update failed!"));
  };

  const deleteBlog = (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    axios.delete(`/api/blogs/${id}/`)
      .then(() => {
        alert("Blog deleted!");
        setBlogs((prev) => prev.filter((b) => b.id !== id));
      })
      .catch(() => alert("Delete failed!"));
  };

  return (
    <>
      <AuthorNavbar />
      <MainCarousel />
      <ToastContainer />

      <div className="container py-5">
        <h2 className="fw-bold mb-4 text-primary"> Welcome, {author}! Your Blogs</h2>
        {blogs.length === 0 ? (
          <h4 className="text-danger text-center">No blogs found for "{author}"</h4>
        ) : (
          <div className="row">
            {loading && (
              <div className="text-center my-4">
                <div className="spinner-border text-primary"></div>
                <span className="fw-medium text-primary fs-5 ms-2">Loading...</span>
              </div>
            )}

            {error && (<p className="text-danger text-center fw-semibold fs-5">{error}!</p>)}

            {blogs.map((b) => (
              <div className="col-md-4 mb-4" key={b.id}>
                <div className="shadow p-3 rounded bg-white">
                  <h4 className="fw-bold">{b.title}</h4>
                  <p><strong>Category:</strong> {b.category}</p>
                  <p><strong>Description:</strong><br />{b.description.substring(0, 100)}...</p>

                  <div className="d-flex mb-1">
                    <button className="btn btn-primary me-2 w-100" onClick={() => changeData(b)}>Update</button>
                    <button className="btn btn-danger w-100" onClick={() => deleteBlog(b.id)}>Delete</button>
                  </div>

                  <button className="btn btn-success w-100" onClick={() => navigate(`blogdetails/${b.title}`)}>View Blog</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content p-3">

              <div className="modal-header">
                <h2 className="fw-bold">Update Your Blog</h2>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>

              <form onSubmit={updateBlog}>
                <div className="modal-body">
                  <label className="fw-bold">Title</label>
                  <input className="form-control mb-2"
                    value={currentBlog.title}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
                  />

                  <label className="fw-bold">Category</label>
                  <input className="form-control mb-2"
                    value={currentBlog.category}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, category: e.target.value })}
                  />

                  <label className="fw-bold">Description</label>
                  <textarea className="form-control mb-2"
                    value={currentBlog.description}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, description: e.target.value })}
                  />

                  <label className="fw-bold">Story</label>
                  <textarea className="form-control mb-2" rows="4"
                    value={currentBlog.story}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, story: e.target.value })}
                  />
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button className="btn btn-primary" type="submit">Update Blog</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};
export default AuthorDashboard;
