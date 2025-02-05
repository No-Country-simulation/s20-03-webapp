import axios from "axios";



const axiosInstance = axios.create({
  baseURL: "https://s20-03-webapp-production.up.railway.app",
  withCredentials: true, // Necesario para JWT si usas cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
