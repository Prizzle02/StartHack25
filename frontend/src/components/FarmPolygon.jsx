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

const farmFields = [
    // Soybean Fields (Green)
    {
        name: "Soybean Field 🌱",
        boundary: [
            [-12.5257, -55.0090],
            [-12.5431, -55.0062],
            [-12.5410, -54.9974],
            [-12.5329, -54.9986],
            [-12.5313, -54.9898],
            [-12.5229, -54.9910],
            [-12.5257, -55.0090],
        ],
        color: "green",
    },
    {
        name: "Soybean Field 🌱",
        boundary: [
            [-12.5583, -55.0037],
            [-12.5571, -54.9947],
            [-12.5684, -54.9929],
            [-12.5695, -55.0019],
        ],
        color: "green",
    },

    // Corn Fields (Yellow)
    {
        name: "Corn Field 🌽",
        boundary: [
            [-12.5450, -55.0050],
            [-12.5450, -55.0000],
            [-12.5500, -55.0000],
            [-12.5500, -55.0050],
            [-12.5450, -55.0050],
        ],
        color: "yellow",
    },
    {
        name: "Corn Field 🌽",
        boundary: [
            [-12.5550, -55.0050],
            [-12.5550, -55.0000],
            [-12.5600, -55.0000],
            [-12.5600, -55.0050],
            [-12.5550, -55.0050],
        ],
        color: "yellow",
    },

    // Cotton Fields (Blue)
    {
        name: "Cotton Field 👕",
        boundary: [
            [-12.5650, -55.0150],
            [-12.5650, -55.0100],
            [-12.5700, -55.0100],
            [-12.5700, -55.0150],
            [-12.5650, -55.0150],
        ],
        color: "blue",
    },
    {
        name: "Cotton Field 👕",
        boundary: [
            [-12.5695, -55.0020],
            [-12.5719, -55.0156],
            [-12.5495, -55.0192],
            [-12.5472, -55.0057],
        ],
        color: "blue",
    },
];

const FarmPolygon = () => {
    return (
        <>
            {/* Red farm boundary (Transparent inside) */}
            <Polygon positions={farmBoundary} color="red" fillOpacity={0} weight={2}>
                <Popup>🚜 Farm Territory</Popup>
            </Polygon>

            {/* Crop fields inside the farm */}
            {farmFields.map((field, index) => (
                <Polygon key={index} positions={field.boundary} color={field.color} fillOpacity={0.4} weight={1}>
                    <Popup>{field.name}</Popup>
                </Polygon>
            ))}
        </>
    );
};

export default FarmPolygon;