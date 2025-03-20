import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import FarmPolygon from "../components/FarmPolygon";
import "leaflet/dist/leaflet.css";
import "../styles/MapView.css";
import domtoimage from "dom-to-image";

const MoveMapToLocation = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng], 12);
    }, [lat, lng, map]);

    return null;
};

const MapView = () => {
    const [lat, setLat] = useState(-12.5000);
    const [lng, setLng] = useState(-55.6400);
    const [ndviImage, setNdviImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const mapRef = useRef(null);
    const navigate = useNavigate(); // ✅ Hook for navigation

    const handleUpdateLocation = () => {
        const newLat = parseFloat(document.getElementById("latInput").value);
        const newLng = parseFloat(document.getElementById("lngInput").value);

        if (!isNaN(newLat) && !isNaN(newLng)) {
            setLat(newLat);
            setLng(newLng);
        } else {
            alert("Please enter valid latitude and longitude.");
        }
    };

    const locations = [
        { name: "Farm 1", lat: -12.545524, lng: -55.002676 },
        { name: "Farm 2", lat: -12.570328158539283, lng: -54.94561289426616 },
        { name: "Cerrado Region 🇧🇷", lat: -15.6000, lng: -47.8000 },
    ];

    const moveToLocation = (lat, lng) => {
        setLat(lat);
        setLng(lng);
    };

    const captureAndSendMap = async () => {
        if (!mapRef.current) return;

        try {
            const dataUrl = await domtoimage.toPng(mapRef.current);

            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image: dataUrl }),
            });

            const result = await response.json();
            if (result.ndvi_image) {
                setNdviImage(result.ndvi_image);
            }
        } catch (error) {
            console.error("Error capturing or sending the map:", error);
        }
    };

    return (
        <div className="map-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h3>Enter Coordinates</h3>
                <input type="number" id="latInput" placeholder="Latitude" defaultValue={lat} step="0.0001" />
                <input type="number" id="lngInput" placeholder="Longitude" defaultValue={lng} step="0.0001" />
                <button onClick={handleUpdateLocation}>Update Location</button>

                <h3>Select a Location</h3>
                {locations.map((loc, index) => (
                    <button key={index} onClick={() => moveToLocation(loc.lat, loc.lng)}>
                        {loc.name}
                    </button>
                ))}

                <button onClick={captureAndSendMap} className="capture-button">
                    Capture & Analyze
                {/* ✅ Button to Navigate to Predictive Model Page */}
                <button className="predictive-model-btn" onClick={() => navigate("/predictive-model")}>
                    Go to Predictive Model
                </button>
            </div>

            {/* Fullscreen Map */}
            <div className="map-wrapper" ref={mapRef}>
                <MapContainer center={[lat, lng]} zoom={12} style={{ width: "100%", height: "100%" }} zoomControl={false}>
                    <TileLayer
                        attribution='Tiles &copy; Esri &mdash; Source: Esri, GIS User Community'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                    <MoveMapToLocation lat={lat} lng={lng} />
                    <Marker position={[lat, lng]}>
                        <Popup>Selected Location: {lat.toFixed(4)}, {lng.toFixed(4)}</Popup>
                    </Marker>
                    <FarmPolygon />

                    {/* Overlay NDVI Image */}
                    {ndviImage && (
                        <ImageOverlay
                            url={ndviImage}
                            bounds={[
                                [lat + 0.05, lng - 0.05], // Top-left corner
                                [lat - 0.05, lng + 0.05], // Bottom-right corner
                            ]}
                            opacity={0.6}
                        />
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapView;
