import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import FarmPolygon from "../components/FarmPolygon";
import "leaflet/dist/leaflet.css";
import "../styles/MapView.css";

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
    const [showModal, setShowModal] = useState(false);

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
        { name: "São Pedro", lat: -22.5487, lng: -47.9100 },
        { name: "Mato Grosso 🇧🇷", lat: -12.5424, lng: -55.7213 },
        { name: "Cerrado Region 🇧🇷", lat: -15.6000, lng: -47.8000 },
    ];

    const moveToLocation = (lat, lng) => {
        setLat(lat);
        setLng(lng);
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
            </div>

            {/* Analyze Now Button */}
           

            {/* Fullscreen Map */}
            <div className="map-wrapper">
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

                    {/* Move the map dynamically */}
                    <MoveMapToLocation lat={lat} lng={lng} />

                    {/* Marker for Selected Location */}
                    <Marker position={[lat, lng]}>
                        <Popup>Selected Location: {lat.toFixed(4)}, {lng.toFixed(4)}</Popup>
                    </Marker>

                    {/* Farm Polygon */}
                    <FarmPolygon />
                </MapContainer>
            </div>

            {/* Modal Window */}
            <div className={`modal-overlay ${showModal ? "active" : ""}`}>
                <div className="modal-content">
                    <h2>Select Analysis Filters</h2>
                    <label>
                        <input type="checkbox" /> Soil Health
                    </label>
                    <label>
                        <input type="checkbox" /> Weather Impact
                    </label>
                    <label>
                        <input type="checkbox" /> Disease Risk
                    </label>
                    <label>
                        <input type="checkbox" /> Crop Growth Index
                    </label>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default MapView;
