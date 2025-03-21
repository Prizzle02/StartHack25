// components/AnalysisMarker.jsx
import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Custom icon (optional)
const analysisIcon = new L.Icon({
  iconUrl: "/analysis-icon.png", // make sure this file exists in public folder
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const AnalysisMarker = ({ position }) => {
  return (
    <Marker position={position} icon={analysisIcon}>
      <Popup>Analysis Point</Popup>
    </Marker>
  );
};

export default AnalysisMarker;
