import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`/api/blogs/`)
            .then((res) => {
                setBlogs(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false);

            });
    }, []);

    return (
        <>
            <Navbar/>
            <div className="container py-5">
                <h2 className="fw-bold text-center mb-4">All Blogs</h2>
                {loading && (
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <div className="spinner-border text-primary me-2" role="status"></div>
                        <span className="fw-medium text-primary fs-5">Loading...</span>
                    </div>
                )}
                {error && <p className="text-danger p-2 fs-4 fw-semibold text-center">{error}! </p>}
                <div className="row g-4">
                    {
                        blogs.map((blog, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="p-3 shadow-sm bg-white rounded" style={{ borderRadius: "14px" }}>
                                    <h4 className="fw-bold">{blog.title}</h4>
                                    <p className="text-dark fs-6 fw-medium mb-1">
                                        <strong className="text-secondary">Author:</strong> {blog.author}
                                    </p>

                                    <p className="text-black fs-6 fw-medium mb-2">
                                        <strong className="text-secondary">Category:</strong> {blog.category}
                                    </p>

                                    <p className="text-muted">
                                        {blog.description.substring(0, 120)}...
                                    </p>

                                    <Link to={`/viewblogs/${blog.id}`} className="btn btn-primary w-100 mt-2" style={{ borderRadius: "25px" }}> Read More →</Link>

                                </div>
                            </div>
                        ))}

                </div>

            </div>
            <Footer/>
        </>
    );
};

export default Blogs;
