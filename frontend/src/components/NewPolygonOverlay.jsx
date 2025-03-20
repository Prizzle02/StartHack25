import React from "react";
import { Polygon, Popup } from "react-leaflet";

const NewPolygonOverlay = () => {
    // 🔹 Coordinates for the new polygon overlaying Farm 1
    const overlayBoundary = [
        [-12.545000, -55.003000], 
        [-12.547500, -55.000500], 
        [-12.550000, -55.002000], 
        [-12.548500, -55.004500], 
        [-12.545000, -55.003000] // Closing the polygon
    ];

    return (
        <Polygon positions={overlayBoundary} color="blue" fillOpacity={0.5}>
            <Popup>🚜 New Polygon Overlay on Farm 1!</Popup>
        </Polygon>
    );
};

export default NewPolygonOverlay;
