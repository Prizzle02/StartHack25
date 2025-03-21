import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import FarmPolygon from "../components/FarmPolygon";
import "leaflet/dist/leaflet.css";
import "../styles/MapView.css";
import AnalysisModal from "../components/AnalysisModal";

const MoveMapToLocation = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng], 12);
    }, [lat, lng, map]);
    return null;
};

const MapView = () => {
    const [lat, setLat] = useState(-12.545524);
    const [lng, setLng] = useState(-55.002676);
    const [showAnalysisModal, setShowAnalysisModal] = useState(false);
    const [ndviVisible, setNdviVisible] = useState(false);
    const mapRef = useRef(null);
    const navigate = useNavigate();

    // Fixed bounds for Farm 1 (adjust these according to your NDVI image coordinates)
    const FARM1_BOUNDS = [
        [-12.495524, -55.052676], // Top-left corner
        [-12.595524, -54.952676]  // Bottom-right corner
    ];

    const handleActivateNDVI = () => {
        console.log("Activating NDVI overlay");
        setNdviVisible(true);
        setShowAnalysisModal(false);
    };

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
        { name: "Farm 2", lat: -12.570328, lng: -54.945613 },
    ];

    return (
        <div className="map-container">
            <div className="sidebar">
                <h3>Enter Coordinates</h3>
                <input type="number" id="latInput" placeholder="Latitude" defaultValue={lat} step="0.0001" />
                <input type="number" id="lngInput" placeholder="Longitude" defaultValue={lng} step="0.0001" />
                <button onClick={handleUpdateLocation}>Update Location</button>

                <h3>Select a Location</h3>
                {locations.map((loc, index) => (
                    <button key={index} onClick={() => setLat(loc.lat) || setLng(loc.lng)}>
                        {loc.name}
                    </button>
                ))}

                <button className="analysis-button" onClick={() => setShowAnalysisModal(true)}>
                    Open Analysis Tools
                </button>

                <button className="predictive-model-btn" onClick={() => navigate("/predictive-model")}>
                    Go to Predictive Model
                </button>
            </div>

            <div className="map-wrapper" ref={mapRef}>
                <MapContainer 
                    center={[lat, lng]} 
                    zoom={12} 
                    style={{ width: "100%", height: "100%" }}
                    zoomControl={false}
                >
                    <TileLayer
                        attribution='Tiles &copy; Esri &mdash; Source: Esri, GIS User Community'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                    
                    <MoveMapToLocation lat={lat} lng={lng} />
                    <Marker position={[lat, lng]}>
                        <Popup>Current View: {lat.toFixed(4)}, {lng.toFixed(4)}</Popup>
                    </Marker>
                    <FarmPolygon />

                    {ndviVisible && (
                        <ImageOverlay
                            url="/outputs/ndvi_farm1.png"
                            bounds={FARM1_BOUNDS}
                            opacity={0.7}
                            zIndex={10}
                        />
                    )}
                </MapContainer>
            </div>

            <AnalysisModal 
                isOpen={showAnalysisModal} 
                onActivateNDVI={handleActivateNDVI}
                onClose={() => setShowAnalysisModal(false)}
            />
        </div>
    );
};

export default MapView;
