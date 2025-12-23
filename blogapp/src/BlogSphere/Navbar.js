import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar container-fluid navbar-expand-lg bg-black shadow-sm">
            <div className="container">
                <Link className="navbar-brand fs-2 fw-bold" to="/">Blog Sphere</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="d-flex justify-content-start justify-content-lg-center fs-5 fw-medium w-100">
                        <ul className="navbar-nav ">

                            <li className="nav-item px-4">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>

                            <li className="nav-item px-4">
                                <Link className="nav-link text-light" to="/blogs">Blogs</Link>
                            </li>

                            <li className="nav-item text-light dropdown px-4">
                                <Link className="nav-link text-light dropdown-toggle" to="#" id="categoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                                    <li><Link className="dropdown-item" to="/blogs/category/Fiction">Fiction</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/category/Creative Writing">Creative Writing</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/category/Book Reviews">Book Reviews</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/category/Travel Stories">Travel Stories</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/category/Literature & Classics">Literature & Classics</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/category/Mystery">Mystery</Link></li>
                                </ul>

                            </li>

                           
                            <li className="nav-item    dropdown px-4">
                                <Link className="nav-link text-light dropdown-toggle" to="#" id="authorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Author</Link>
                                <ul className="dropdown-menu" aria-labelledby="authorDropdown">
                                    <li><Link className="dropdown-item" to="/blogs/author/Aarav Mehta">Aarav Mehta</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Meera Nandan">Meera Nandan</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Kavya Sharma">Kavya Sharma</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Rohan Verma">Rohan Verma</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Ananya Rao">Ananya Rao</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Arjun Malhotra">Arjun Malhotra</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Ishaan Roy">Ishaan Roy</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Tara Sen">Tara Sen</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Rhea Mehta">Rhea Mehta</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Sana Iyer">Sana Iyer</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Advika Sen">Advika Sen</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Devansh Rao">Devansh Rao</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/author/Iraan Malik">Iraan Malik</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                    <div className="d-flex align-items-center ms-3">
                        <Link to="/login">
                        <CgProfile size={30} className="text-light" style={{ cursor: "pointer" }} />
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
