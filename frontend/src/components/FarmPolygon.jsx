import React from "react";
import { Polygon, Popup } from "react-leaflet";

// Updated farm boundary with new coordinates
const farmBoundary = [
    [-12.527542, -55.022488], // Point 1
    [-12.523058, -54.991049], // Point 2
    [-12.567199, -54.983153], // Point 3
    [-12.571798, -55.015539], // Point 4
    [-12.527542, -55.022488], // Closing the polygon
];

const FarmPolygon = () => {
    return (
        <Polygon positions={farmBoundary} color="green" fillOpacity={0.4}>
            <Popup>🚜 Updated Agricultural Field</Popup>
        </Polygon>
    );
};

export default FarmPolygon;
