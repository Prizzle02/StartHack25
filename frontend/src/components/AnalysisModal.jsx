import React, { useState } from "react";
import "../styles/AnalysisModal.css";

const AnalysisModal = ({ isOpen, onActivatePolygon,onClose }) => {
    const [activeMenu, setActiveMenu] = useState(null); // Track which menu is open
    const [showComponent, setShowComponent] = useState(false); 

    if (!isOpen) return null;

    return (
        <div className="analysis-modal">
            {/* ✅ Improved Close Button (Top-Right) */}
            <button className="close-button" onClick={onClose}>✖</button>

            {activeMenu === null ? (
                <>
                    <h2>Analysis Options</h2>
                    <div className="modal-section">
                        <button className="section-button" onClick={() => setActiveMenu("analysis")}>Analysis Settings</button>
                    </div>
                    <div className="modal-section">
                        <button className="section-button" onClick={() => setActiveMenu("environment")}>Environment Settings</button>
                    </div>
                    <div className="modal-section">
                        <button className="section-button" onClick={() => setActiveMenu("crop")}>Crop Settings</button>
                    </div>
                    <div className="modal-section">
                        <button className="section-button" onClick={() => setActiveMenu("scheduling")}>Scheduling</button>
                    </div>

                    <div className="modal-section">
                    <button 
                    className="analyze-button"
                    onClick={() => {
                        console.log("✅ 'lol' button clicked! Activating CropsPolygon...");
                        onActivatePolygon();
                    }}
                >
                    Analyze
                </button>
            </div>
                </>
            ) : (
                <div className="sidebar-menu">
                    <button className="back-button" onClick={() => setActiveMenu(null)}>← Back</button>
                    {activeMenu === "analysis" && (
                        <>
                            <h2>Analysis Settings</h2>
                            <label><input type="checkbox" /> Soil Health</label>
                            <label><input type="checkbox" /> Water Availability</label>
                            <label><input type="checkbox" /> Pest Risk</label>
                        </>
                    )}
                    {activeMenu === "environment" && (
                        <>
                            <h2>Environment Settings</h2>
                            <label><input type="checkbox" /> Temperature</label>
                            <label><input type="checkbox" /> Rainfall</label>
                            <label><input type="checkbox" /> Humidity</label>
                        </>
                    )}
                    {activeMenu === "crop" && (
                        <>
                            <h2>Crop Settings</h2>
                            <label><input type="checkbox" /> Corn</label>
                            <label><input type="checkbox" /> Wheat</label>
                            <label><input type="checkbox" /> Soybean</label>
                        </>
                    )}
                    {activeMenu === "scheduling" && (
                        <>
                            <h2>Scheduling</h2>
                            <label>Select Date: <input type="date" /></label>
                            <label>Select Time: <input type="time" /></label>
                            <label><input type="checkbox" /> Send Alerts</label>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default AnalysisModal;
