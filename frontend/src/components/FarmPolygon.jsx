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

// Crop Fields (Soybean, Corn, Cotton)
const farmFields1 = [
    // Soybean Fields (Green)
    {
        name: "Soybean Field 🌱",
        boundary: [
            [-12.5257, -55.0090],
            [-12.5695, -55.0019], 
            [-12.5682, -54.9930], 

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
            [-12.5695, -55.0019],
        ],
        color: "green",
    },

    // Corn Fields (Yellow)
    {
        name: "Corn Field 🌽",
        boundary: [
            [-12.5275, -55.0225],
            [-12.5495, -55.0192],
            [-12.5470, -55.0057],
            [-12.5258, -55.0092],
        ],
        color: "yellow",
    },
    {
        name: "Corn Field 🌽",
        boundary: [
            [-12.5465, -54.9964],
            [-12.5451, -54.9873],
            [-12.5314, -54.9898],
            [-12.5329, -54.9986],
        ],
        color: "yellow",
    },

    // Cotton Fields (Blue)
    {
        name: "Cotton Field 👕",
        boundary: [
            [-12.5466, -54.9964],
            [-12.5452, -54.9873],
            [-12.5671, -54.9837],
            [-12.5683, -54.9929],
        
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

const farmFields2 = [
    // Soybean Fields (Green)
    {
        name: "Soybean Field 🌱",
        boundary: [
            [-12.563620310856162, -54.95609341333931],
            [-12.562192397794632, -54.94752477048892], 
            [-12.584018202569657, -54.94344944035275], 
            [-12.585445994313053, -54.95264505707025],             
        ],
        color: "green",
    },

    // Corn Fields (Yellow)
    {
        name: "Corn Field 🌽",
        boundary: [
            [-12.561988, -54.946898],
            [-12.583916217141184, -54.94324044906371],
            [-12.582488416887767, -54.93467180621332],
            [-12.56056048744294, -54.938120162482385],
        ],
        color: "yellow",
    },

    // Cotton Fields (Blue)
    {
        name: "Cotton Field 👕",
        boundary: [
            [-12.585853933352189, -54.95243606578122],
            [-12.582896360627734, -54.93467180621332],
            [-12.605842151504438, -54.930491980432635],
            [-12.606861916765178, -54.94888321386763],
        
        ],
        color: "blue",
    },

];

const FarmPolygon = () => {
    return (
        <>
            {/* First Farm */}
            <Polygon positions={farmBoundary1} color="red" fillOpacity={0}>
                <Popup>🚜 Farm 1 - Main Field</Popup>
            </Polygon>

            {/* Second Farm */}
            <Polygon positions={farmBoundary2} color="red" fillOpacity={0}>
                <Popup>🚜 Farm 2 - New Expansion</Popup>
            </Polygon>

            {/* Crop Fields */}
            {farmFields1.map((field, index) => (
                <Polygon key={index} positions={field.boundary} color={field.color} fillOpacity={0.2}>
                    <Popup>{field.name}</Popup>
                </Polygon>
            ))}
            {farmFields2.map((field, index) => (
                <Polygon key={index} positions={field.boundary} color={field.color} fillOpacity={0.2}>
                    <Popup>{field.name}</Popup>
                </Polygon>
            ))}
        </>
    );
};

export default FarmPolygon;
