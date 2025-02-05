// lib/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://s20-03-webapp-production.up.railway.app', // Asegúrate de que esta es la URL correcta de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Esto asegura que los tokens de sesión se envíen con las solicitudes
});

export default axiosInstance;

