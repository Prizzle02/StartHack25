import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import "../styles/Navbar.css";
import AnalysisModal from "./AnalysisModal"; 

import logo from "../assets/logo.png"; // ✅ Import the logo image

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate(); // ✅ Hook for navigation

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* ✅ Clickable Logo */}
                <img 
                    src={logo} 
                    alt="Biological Logo" 
                    className="logo" 
                    onClick={() => navigate("/")} // ✅ Redirect to home when clicked
                />

                {/* ✅ Analyze Now button opens the modal */}
                <button className="analyze-option" onClick={() => setModalOpen(true)}>
                    Analyze Options
                </button>
            </div>

            {/* ✅ Modal is now controlled by Navbar */}
            <AnalysisModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </nav>
    );
};

export default Navbar;
