import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      const errorMessage = error.response.data?.message || 'Error en la petición';
      return Promise.reject(new Error(errorMessage));
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      return Promise.reject(new Error('No se pudo conectar al servidor'));
    } else {
      // Algo sucedió en la configuración de la petición
      return Promise.reject(error);
    }
  }
);

// Servicio de Contacto
export const contactService = {
  sendMessage: (data) => api.post('/contact', data),
  getMessages: (params = {}) => api.get('/contact', { params }),
  getMessage: (id) => api.get(`/contact/${id}`),
  updateMessageStatus: (id, status) => api.put(`/contact/${id}`, { status }),
  deleteMessage: (id) => api.delete(`/contact/${id}`),
};

// Servicio de Autenticación
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/me'),
  updateProfile: (userData) => api.put('/auth/me', userData),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token, data) => api.post(`/auth/reset-password/${token}`, data),
};

// Servicio de Galería
export const galleryService = {
  getImages: (params = {}) => api.get('/gallery', { params }),
  uploadImage: (formData) => api.post('/gallery/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  deleteImage: (id) => api.delete(`/gallery/${id}`),
};

export default api;
