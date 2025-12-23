import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";

const AdminView = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/blogs/${id}/`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);


  useEffect(() => {
    axios
      .get("/api/reviews/" )
      .then((res) => {
        const filtered = res.data.filter(
          (rev) => rev.blogId === Number(id)
        );
        setReviews(filtered);
      });
  }, [id]);


  if (loading) return <h3 className="text-center">Loading...</h3>;
  if (!blog) return <h3 className="text-danger text-center">Blog not found</h3>;

  return (
    <>

      <div className="container py-5">
        <h2 className="text-primary fw-bold">{blog.title}</h2>
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>Category:</strong> {blog.category}</p>
        <p>{blog.story}</p>
      </div>

      <div className="container pb-4">
        <h3 className="text-center">Reviews</h3>

        {reviews.length === 0 && (
          <p className="text-danger text-center">No reviews yet</p>
        )}

        <div className="row">
          {reviews.map((rev) => (
            <div key={rev.id} className="col-lg-4 col-md-6 mb-3">
              <div className="p-3 shadow-sm rounded bg-white h-100">
                <p>{rev.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AdminView;
