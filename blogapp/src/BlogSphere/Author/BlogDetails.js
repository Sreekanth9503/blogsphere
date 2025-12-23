import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import AuthorNavbar from "./AuthorNavbar";
import Footer from "../Footer";

const BlogDetails = () => {

    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);

    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({blogId: "", title: "",author: "", category: "", review: ""});
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        axios.get("/api/blogs/")
            .then((res) => setBlogs(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (blogs.length > 0) {
            const blog = blogs.find(
                (b) => b.title.toLowerCase() === decodedTitle.toLowerCase()
            );

            if (blog) {
                setBlog(blog);
                setFormData({
                    blogId: blog.id,
                    title: blog.title,
                    author: blog.author,
                    category: blog.category,
                    review: ""
                });
            } else {
                setError("Blog not blog");
            }

            setLoading(false);
        }
    }, [blogs, decodedTitle]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/reviews/")
            .then((res) => {
                const filtered = res.data.filter(
                    (rev) => rev.title.toLowerCase() === decodedTitle.toLowerCase()
                );
                setReviews(filtered);
            })
            .catch((err) => console.log(err));
    }, [decodedTitle]);

    const changeData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: "" }));
    };
    const validateForm = () => {
        let errors = {};
        if (!formData.review.trim()) errors.review = "Review cannot be empty.";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("Please write a review before submitting.");
            return;
        }

        const payload = {
            blogId: formData.blogId,
            title: formData.title,
            author: formData.author,
            category: formData.category,
            review: formData.review,
        };

        axios.post(`/api/reviews/`, payload)
            .then(() => {
                toast.success("Review Posted Successfully");
                setFormData((prev) => ({ ...prev, review: "" }));
                setReviews((prev) => [...prev, payload]);
            })
            .catch(() => toast.error("Failed to post review"));
    };

    if (loading)
        return (
            <div className="text-center my-5">
                <div className="spinner-border text-primary"></div>
                <span className="text-primary fs-5 ms-2"> Loading...</span>
            </div>
        );

    if (error)
        return (
            <p className="text-danger text-center fs-5 fw-medium my-5">{error}!</p>
        );

    return (
        <>
            <AuthorNavbar />
            <ToastContainer />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="p-4 shadow bg-white rounded">
                            <h2 className="fw-bold text-primary mb-3">{blog.title}</h2>
                            <p><strong>Author:</strong> {blog.author}</p>
                            <p><strong>Category:</strong> {blog.category}</p>
                            <p><strong>Description:</strong> {blog.description}</p>
                            <p><strong className="fs-5">Story:</strong><br /> {blog.story}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <h3 className="text-primary text-center fs-1 mb-4">Reviews</h3>
                <div className="row p-5">
                    {reviews.length === 0 && (
                        <p className="text-danger shadow-lg p-3 fs-5 fw-medium text-center">No reviews yet</p>
                    )}

                    {reviews.length > 0 &&
                        reviews.map((rev, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="p-3 shadow-sm bg-white rounded">
                                    <h5 className="fw-bold">{rev.title}</h5>
                                    <p><strong>Author:</strong> {rev.author}</p>
                                    <p><strong>Category:</strong> {rev.category}</p>
                                    <p className=""><strong>Review:<br/></strong>{rev.review}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="container p-5 pt-0">
                <div className="row">
                    <div className="col-lg-6 shadow-lg p-5 mx-auto">
                        <h2 className="text-center text-primary mb-3">Write a Review</h2>

                        <form onSubmit={submitHandler}>

                            <label className="form-label fw-semibold">Author</label>
                            <input
                                name="author"
                                className="form-control mb-2"
                                value={formData.author}
                                readOnly
                            />

                            <label className="form-label fw-semibold mt-2">Category</label>
                            <input
                                name="category"
                                className="form-control mb-2"
                                value={formData.category}
                                readOnly
                            />

                            <label className="form-label fw-semibold mt-2">Your Review</label>
                            <textarea
                                name="review"
                                className="form-control mb-2"
                                value={formData.review}
                                onChange={changeData}
                                placeholder="Write your review"
                            />
                            {formErrors.review && (
                                <p className="text-danger small">{formErrors.review}</p>
                            )}

                            <button type="submit" className="btn btn-success w-100 mt-3">
                                Submit Review
                            </button>

                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default BlogDetails;
