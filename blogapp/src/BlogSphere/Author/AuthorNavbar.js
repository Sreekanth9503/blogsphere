import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useParams } from "react-router";

const AuthorNavbar = () => {
    const { author } = useParams(); 

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-black shadow-sm">
            <div className="container">
                <h2 className="fs-2 fw-bold navbar-brand">Blog Sphere</h2>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#authorNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="authorNav">
                    <ul className="navbar-nav mx-auto fs-5 fw-medium mt-3 mt-lg-0">
                        <li className="nav-item px-3">
                            <Link className="nav-link text-light" to={`/author/dashboard/${author}`}>Home</Link>
                        </li>

                        <li className="nav-item px-3">
                            <Link className="nav-link text-light" to={`/author/newblog/${author}`}>Add Blog</Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center mt-3 mt-lg-0">
                        <div className="d-flex flex-column text-light me-3">
                            <CgProfile size={30} />
                            <small className="fw-semibold text-nowrap">{author}</small>
                        </div>

                        <Link to="/login">
                            <button className="btn btn-outline-danger fw-semibold">Logout</button>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default AuthorNavbar;
