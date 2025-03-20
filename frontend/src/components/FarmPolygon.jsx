import React from "react";
import { Polygon, Popup } from "react-leaflet";

// Updated farm boundary coordinates
const farmBoundary = [
    [-12.468320, -55.654905], // Point 1
    [-12.471589, -55.625891], // Point 2
    [-12.525844, -55.611608], // Point 3
    [-12.537173, -55.676330], // Point 4
    [-12.468320, -55.654905], // Closing the polygon
];

const FarmPolygon = () => {
    return (
        <Polygon positions={farmBoundary} color="green" fillOpacity={0.4}>
            <Popup>🚜 Updated Agricultural Field</Popup>
        </Polygon>
    );
};

export default FarmPolygon;
