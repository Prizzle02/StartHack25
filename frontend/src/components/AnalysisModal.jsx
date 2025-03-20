import React from "react";
import "../styles/AnalysisModal.css";

const AnalysisModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // ✅ Prevents rendering when closed

    return (
        <div className="analysis-modal">
            
            <div className="modal-section">
                <button className="section-button">Analysis Settings</button>
            </div>

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
