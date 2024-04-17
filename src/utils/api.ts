import axios from "axios";

const API_BASE_URL = 'http://localhost:5000'; // Replace with actual API base URL

export const fetchHoldings = async (userId: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/holdings/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch holdings:', error);
        throw error;
    }
};

export const fetchChartData = async (userId: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/holdings/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch holdings:', error);
        throw error;
    }
};