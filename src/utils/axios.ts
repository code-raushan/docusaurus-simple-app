import axios from 'axios';

// Create an Axios instance with a custom configuration
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4445/api/v1', // Replace with your actual API base URL
    timeout: 10000, // Optional timeout setting
    headers: {
        'Content-Type': 'application/json',
    },
});


export default axiosInstance;
