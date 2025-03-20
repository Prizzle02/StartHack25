import React, { useState } from "react";
import "../styles/PredictiveModel.css";

const PredictiveModel = ({ onPredict }) => {
    const [selectedDate, setSelectedDate] = useState("");

    const handlePredict = () => {
        if (!selectedDate) {
            alert("Please select a date first!");
            return;
        }
        onPredict(selectedDate); // Pass the selected date to the main app
    };

    return (
        <div className="predictive-model">
            <div className="model-content">
                <h1>🌾 Predict Your Farm's Future</h1>
                <p>Select a date to see predicted farm conditions.</p>

                <label className="date-picker">
                    <span>Choose Date:</span>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </label>

                <button className="predict-button" onClick={handlePredict}>
                    🔍 Predict
                </button>
            </div>
        </div>
    );
};

export default PredictiveModel;
