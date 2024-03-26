import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "",
    // baseURL: "http://localhost:8080" || process.env.REACT_APP_API_BASE_URL || "",
    timeout: 5000000,
    headers: { "x-access-token": process.env.REACT_APP_API_AUTH_TOKEN || "" }
});
