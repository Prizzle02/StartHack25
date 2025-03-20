import React from "react";
import { Polygon, Popup } from "react-leaflet";

// First farm boundary (Existing farm)
const farmBoundary1 = [
    [-12.527542, -55.022488],
    [-12.523058, -54.991049],
    [-12.567199, -54.983153],
    [-12.571798, -55.015539],
    [-12.527542, -55.022488], // Closing the polygon
];

// Second farm boundary (New farm)
const farmBoundary2 = [
    [-12.563001, -54.956176],
    [-12.561034, -54.937930],
    [-12.605603654382763, -54.93008764579202],
    [-12.607309130673789, -54.94834043373192],
    [-12.563001, -54.956176], // Closing the polygon
];

const FarmPolygon = () => {
    return (
        <>
            {/* First Farm */}
            <Polygon positions={farmBoundary1} color="green" fillOpacity={0.4}>
                <Popup>🚜 Farm 1 - Main Field</Popup>
            </Polygon>

            {/* Second Farm */}
            <Polygon positions={farmBoundary2} color="blue" fillOpacity={0.4}>
                <Popup>🚜 Farm 2 - New Expansion</Popup>
            </Polygon>
        </>
    );
};

export default FarmPolygon;
