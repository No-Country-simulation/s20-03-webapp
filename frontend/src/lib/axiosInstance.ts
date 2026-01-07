// lib/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Asegúrate de que esta es la URL correcta de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Esto asegura que los tokens de sesión se envíen con las solicitudes
});


axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // O donde lo guardes
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
