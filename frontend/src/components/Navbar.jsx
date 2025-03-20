import React, { useState } from "react";
import "../styles/Navbar.css";
import AnalysisModal from "./AnalysisModal"; // ✅ Import modal inside Navbar

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <span className="logo">Biological</span>

                {/* ✅ Analyze Now button opens the modal */}
                <button className="analyze-btn" onClick={() => setModalOpen(true)}>
                    Analyze Now
                </button>
            </div>

            {/* ✅ Modal is now controlled by Navbar */}
            <AnalysisModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </nav>
    );
};

export default Navbar;


