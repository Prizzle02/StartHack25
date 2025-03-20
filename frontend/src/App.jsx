import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PredictiveModel from "./pages/PredictiveModel"; // Import Correct Page
import Analysis from "./pages/Analysis";

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ marginTop: "70px" }}> {/* Prevent overlap with navbar */}
                <Routes>
                    <Route path="/" element={<Analysis />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/predictive-model" element={<PredictiveModel />} /> {/* ✅ Added Route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
