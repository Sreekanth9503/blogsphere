import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-light bg-black pt-5 pb-3">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <h3 className="footer-logo fw-bold" >
                            BlogSphere
                        </h3>
                        <p className="mt-3 text-light">
                            A modern platform for stories, novels, reviews, and creative writing.
                            Discover meaningful content crafted by talented authors.
                        </p>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h5 className="fw-semibold text-white mb-3">Quick Links</h5>
                        <ul className="list-unstyled" style={{ color: "#CBD5E1" }}>
                            <li><Link className="text-light text-decoration-none" to="/">Home</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/blogs">Blogs</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/categories">Categories</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/authors">Authors</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h5 className="fw-semibold text-white mb-3">Resources</h5>
                        <ul className="list-unstyled" style={{ color: "#CBD5E1" }}>
                            <li><Link className="text-light text-decoration-none" to="/about">About Us</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/contact">Contact</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/privacy">Privacy Policy</Link></li>
                            <li><Link className="text-light text-decoration-none" to="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4 ">
                        <h5 className="fw-semibold text-white mb-3">Follow Us</h5>

                        <div className="d-flex justify-content-center gap-3">
                            <Link to="#" className="text-light fs-5 social-icon">
                                <FaFacebookF />
                            </Link>
                            <Link to="#" className="text-light fs-5 social-icon">
                                <FaTwitter />
                            </Link>
                            <Link to="#" className="text-light fs-5 social-icon">
                                <FaInstagram />
                            </Link>
                            <Link to="#" className="text-light fs-5 social-icon">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>

                </div>

                <hr style={{ borderColor: "#334155" }} />
                <div className="text-center text-light mt-3">
                    © {new Date().getFullYear()} BlogSphere. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
