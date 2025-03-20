import axios from "axios";

const NASA_API_KEY = "VHAa4ZL6JfUe5jiSHZohGUoii2g2wIwYorUp5z3L"; // Replace with your NASA API key
const NASA_BASE_URL = "https://api.nasa.gov/planetary/earth/assets";

/**
 * Fetch satellite NDVI data for given coordinates
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise<Object>} NDVI data from NASA
 */
export const getNDVIData = async (lat, lon) => {
    try {
        const response = await axios.get(NASA_BASE_URL, {
            params: {
                lon,
                lat,
                dim: 0.1, // Adjust image dimension (smaller if needed)
                date: "2024-03-20", // Most recent image
                api_key: NASA_API_KEY,
            },
        });

        console.log("NASA API Response:", response.data);
        if (!response.data.url) {
            console.error("❌ No NDVI image found for this location.");
            return null;
        }

        return response.data;
    } catch (error) {
        console.error("❌ Error fetching NDVI data:", error);
        return null;
    }
};
