import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Categories = () => {
    const { category } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`/api/blogs/`)
            .then((res) => {
                const filtered = res.data.filter(
                    (blog) => blog.category.toLowerCase() === category.toLowerCase()
                );
                setBlogs(filtered);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [category]);

    return (
        <>
            <Navbar />
            <div className="container py-5">

                <h2 className="fw-bold text-center mb-4">
                    Blogs in Category: {category}
                </h2>

                {loading && (
                    <div className="text-center my-4">
                        <div className="spinner-border text-primary"></div>
                        <span className="fw-medium text-primary fs-5"> Loading...</span>
                    </div>
                )}

                {error && (
                    <p className="text-danger text-center fw-semibold fs-5">
                        {error}!
                    </p>
                )}


                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div className="col-md-4" key={blog.id}>
                            <div className="p-3 shadow-sm bg-white rounded">
                                <h4 className="fw-bold">{blog.title}</h4>
                                <p><strong className="text-secondary">Author: </strong>{blog.author}</p>
                                <p><strong className="text-secondary">Category: </strong>{blog.category}</p>
                                <p className="text-muted">{blog.description.substring(0, 120)}...</p>
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

export default Categories;
