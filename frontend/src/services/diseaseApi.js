import axios from "axios";

const API_BASE_URL = "https://services.cehub.syngenta-ais.com/api/DiseaseRisk"; 
const API_KEY = "d4f087c7-7efc-41b4-9292-0f22b6199215"; // Replace with a valid API key

// Function to fetch Corn Disease Risk
export const getCornRisk = async (latitude, longitude) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/CornRisk`, {
            params: {
                latitude: latitude,
                longitude: longitude,
                startDate: "2024-03-20", // Adjust dynamically if needed
                endDate: "2024-03-27",
                modelId: "CornFusariumHeadBlight",
                datasetLabel: "NEMSAUTO"
            },
            headers: {
                "accept": "*/*",
                "ApiKey": API_KEY
            }
        });

        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching Disease Risk:", error);
        return null;
    }
};
