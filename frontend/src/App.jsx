import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/PredictiveModel";
import Analysis from "./pages/Analysis"; // Import Analysis Page

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ marginTop: "70px" }}> {/* Prevent overlap with navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/analysis" element={<Analysis />} /> {/* New Page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
