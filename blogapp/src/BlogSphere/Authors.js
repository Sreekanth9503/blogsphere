import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Navbar from "./Navbar";

const Authors = () => {
    const { author } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`/api/blogs/`)
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



    return (
        <>
            <Navbar/>
            <div className="container p-5">
                <h2 className="fw-bold text-center mb-4">
                    Author: <span className="text-primary">{author}</span>
                </h2>

                {loading && (
                    <div className="text-center my-4">
                        <div className="spinner-border text-primary"></div>
                        <span className="fw-medium text-primary fs-5 ms-2">Loading...</span>
                    </div>
                )}

                {error && (<p className="text-danger text-center fw-semibold fs-5">{error}!</p>
                )}

                <div className="row p-5">
                    {
                    blogs.map((blog) => (
                        <div className="col-md-4" key={blog.id}>
                            <div className="p-3 shadow-sm bg-white rounded h-100">
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

        </>
    );
};

export default Authors;
