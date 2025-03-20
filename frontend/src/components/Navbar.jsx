import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ onAnalyzeClick }) => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo or Brand Name */}
                <span className="logo">Biological</span>

                {/* Analyze Now Button */}
                <button className="analyze-btn" onClick={onAnalyzeClick}>
                    Analyze Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
