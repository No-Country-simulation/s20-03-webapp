import api from '@/lib/axiosInstance';

// Definimos la interfaz aquí para reusarla
export interface User {
  _id: string; // Mongo usa _id
  username: string;
  email: string;
  role: string;
  // ... resto
}

export const userService = {
  getAll: async (): Promise<User[]> => {
    const response = await api.get<User[]>('/users');
    return response.data;
  },

  getById: async (id: string): Promise<User> => {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  },

  create: async (data: Partial<User>) => {
    return await api.post('/users', data);
  }
};