import React from "react";
import { Link } from "react-router";
import MainCarousel from "./MainCarousel";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
            <Navbar/>
            <MainCarousel />
            <section
                className="py-5"
                style={{
                    background: "linear-gradient(135deg, #F8FAFC, #EAF0FF)"
                }}
            >
                <div className="container text-center">
                    <h2 className="fw-bold" style={{ color: "#0F172A" }}>
                        Welcome to <span style={{ color: "#2A4DFF" }}>BlogSphere</span>
                    </h2>

                    <p className="mt-3 fs-5" style={{ color: "#64748B" }}>
                        Explore Mystery, Creative Writing, Fiction, Book Reviews, 
                        and timeless Literature & Classics written by our talented authors.
                    </p>

                    <Link
                        className="btn mt-3 px-5 py-2"
                        style={{
                            backgroundColor: "#2A4DFF",
                            color: "white",
                            borderRadius: "30px",
                            fontWeight: 500
                        }}
                        to="/blogs"
                    >
                        Explore Blogs →
                    </Link>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container">
                    <h2 className="fw-bold text-center mb-4" style={{ color: "#0F172A" }}>
                        Popular Categories
                    </h2>

                    <div className="row g-4">

                        {[
                            {
                                title: "Mystery",
                                desc: "Twists, secrets, hidden truths & investigative stories."
                            },
                            {
                                title: "Creative Writing",
                                desc: "Expressive storytelling, emotions & original imagination."
                            },
                            {
                                title: "Fiction",
                                desc: "Character-driven stories full of depth and emotion."
                            },
                            {
                                title: "Literature & Classics",
                                desc: "Timeless writing filled with culture, wisdom & beauty."
                            },
                            {
                                title: "Book Reviews",
                                desc: "Insightful reviews to help you choose your next read."
                            }
                        ].map((cat, index) => (
                            <div className="col-md-4" key={index}>
                                <div
                                    className="p-4 shadow-sm bg-white rounded"
                                    style={{
                                        borderRadius: "16px",
                                        transition: ".3s"
                                    }}
                                >
                                    <h4 className="fw-bold mb-2" style={{ color: "#0F172A" }}>
                                        {cat.title}
                                    </h4>
                                    <p style={{ color: "#64748B" }}>{cat.desc}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section
                className="py-5"
                style={{ background: "linear-gradient(125deg, #EFF3FF, #F8FAFC)" }}
            >
                <div className="container text-center">

                    <h2 className="fw-bold" style={{ color: "#0F172A" }}>
                        Meet Our Authors
                    </h2>

                    <p className="mt-3 fs-5" style={{ color: "#64748B" }}>
                        The storytellers behind Mystery, Classics, Fiction, Creative Writing & Reviews.
                    </p>

                    <div className="row g-4 mt-4">

                        {[
                            { name: "Aarav Mehta", role: "Fiction Novelist" },
                            { name: "Meera Nandan", role: "Creative Writing Author" },
                            { name: "Arjun Malhotra", role: "Mystery Story Writer" },
                            { name: "Iraan Malik", role: "Mystery & Suspense Writer" },
                            { name: "Kavya Sharma", role: "Literature & Classics Author" },
                            { name: "Devansh Rao", role: "Classical Storyteller" },
                            { name: "Advika Sen", role: "Book Review Critic" }
                        ].map((author, index) => (
                            <div className="col-md-3" key={index}>
                                <div
                                    className="p-4 shadow-sm bg-white rounded"
                                    style={{
                                        borderRadius: "16px",
                                        transition: ".3s"
                                    }}
                                >
                                    <h5 className="fw-bold" style={{ color: "#0F172A" }}>
                                        {author.name}
                                    </h5>
                                    <p style={{ color: "#64748B" }}>{author.role}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <Link
                        className="btn mt-4 px-4 py-2"
                        style={{
                            backgroundColor: "#2A4DFF",
                            color: "white",
                            borderRadius: "30px"
                        }}
                        to="/blogs"
                    >
                        View All blogs
                    </Link>

                </div>
            </section>

            {/* ===== WHY BLOGSPHERE ===== */}
            <section className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container">
                    <h2
                        className="fw-bold text-center mb-4"
                        style={{ color: "#0F172A" }}
                    >
                        Why Choose BlogSphere?
                    </h2>

                    <div className="row g-4 text-center">

                        {[
                            {
                                title: "Modern Reading Experience",
                                desc: "Clean, elegant and distraction-free UI."
                            },
                            {
                                title: "Role-Based System",
                                desc: "Admin, Author & User friendly dashboards."
                            },
                            {
                                title: "Smooth Story Publishing",
                                desc: "Write, edit & manage stories effortlessly."
                            },
                            {
                                title: "Smart Filters",
                                desc: "Search by category, author or story type."
                            }
                        ].map((item, index) => (
                            <div className="col-md-3" key={index}>
                                <div
                                    className="p-4 shadow-sm bg-white rounded"
                                    style={{
                                        borderRadius: "16px",
                                        transition: ".3s"
                                    }}
                                >
                                    <h5 className="fw-bold" style={{ color: "#0F172A" }}>
                                        {item.title}
                                    </h5>
                                    <p style={{ color: "#64748B" }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </div>
        <Footer/>
        </>
    );
};

export default Home;
