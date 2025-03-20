import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo or Brand Nam*/}
                <Link to="/" className="logo">Biologicalde</Link>

                {/* Navigation Links */}
                <div className="nav-links">
                <button className="analyze-btn" onClick={() => setShowModal(true)}>
                Analyze Now
            </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
