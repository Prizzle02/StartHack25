import React from "react";
import "./AnalysisModal.css"; // Import modal styles

const AnalysisModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render when closed

    return (
        <div className="analysis-modal">
            <h2>Analysis Settings</h2>

            <div className="modal-section">
                <button className="section-button">Environment Settings</button>
            </div>

            <div className="modal-section">
                <button className="section-button">Crop Settings</button>
            </div>

            <div className="modal-section">
                <button className="small-button">Scheduling</button>
            </div>

            <div className="modal-section">
                <button className="analyze-button">Analyze</button>
            </div>

            <button className="close-button" onClick={onClose}>✖ Close</button>
        </div>
    );
};

export default AnalysisModal;
