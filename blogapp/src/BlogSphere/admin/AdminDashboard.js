import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Footer";

const AdminDashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/api/blogs/")
            .then((res) => setBlogs(res.data))
            .catch((err) => console.log(err));
    }, []);

    const viewBlog = (id) => {
        navigate(`/admin/blog/${id}`);
    };

    const deleteBlog = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this blog?"
        );

        if (!confirmDelete) return;

        try {
            await axios.delete(`/api/blogs/${id}/`);
            setBlogs((prev) => prev.filter((blog) => blog.id !== id));
            toast("Blog deleted successfully")
        } catch (error) {
            console.log(error);
            alert("Failed to delete blog");
        }
    };

    return (
        <>
            <AdminNavbar />
            <ToastContainer />
            <div className="container p-5">
                <h2 className="text-primary fw-bold fs-2 text-center mb-4">
                    Blogs (Admin)
                </h2>

                {blogs.length === 0 && (
                    <p className="text-danger text-center">No blogs found</p>
                )}

                <div className="row">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-header text-center">
                                    <h5 className="fw-bold">{blog.author}</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <strong>Title:</strong> {blog.title}
                                    </p>
                                    <p>
                                        <strong>Category:</strong> {blog.category}
                                    </p>
                                    <p className="text-muted">
                                        {blog.description}
                                    </p>
                                </div>

                                <div className="card-footer d-flex justify-content-center">
                                    <button
                                        className="btn btn-primary btn-sm me-5 px-3 py-2 fw-semibold"
                                        onClick={() => viewBlog(blog.id)}
                                    >
                                        View Blog
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteBlog(blog.id)}
                                    >
                                        Delete Blog
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AdminDashboard;
