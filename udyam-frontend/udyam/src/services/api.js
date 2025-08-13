import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend URL

// Create axios instance with base config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Helper function to convert file to base64
const fileToBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result.split(',')[1]);
  reader.onerror = error => reject(error);
});
// src/services/api.js
export const sendOTP = async (mobile) => {
  try {
    const response = await api.post('/send-otp', { 
      mobile 
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    // Enhance error handling
    if (error.response) {
      // Server responded with non-2xx status
      throw new Error(error.response.data.error || 'OTP send failed');
    } else if (error.request) {
      // No response received
      throw new Error('Network error - no response from server');
    } else {
      // Request setup error
      throw new Error('Error setting up OTP request');
    }
  }
};

export const verifyOTP = (mobile, otp) => api.post('/verify-otp', { mobile, otp });

export const submitPAN = (panData) => api.post('/submit-pan', panData);

export const submitBusinessDetails = (businessData) => api.post('/submit-business-details', businessData);

export const uploadDocuments = async (files) => {
  const formData = new FormData();
  formData.append('aadhaarFile', files.aadhaarFile[0]);
  formData.append('panFile', files.panFile[0]);
  formData.append('bankDocument', files.bankDocument[0]);

  return api.post('/upload-documents', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};


export const submitRegistration = (registrationData) => api.post('/submit-registration', registrationData);

export const checkStatus = (registrationId) => api.get(`/check-status/${registrationId}`);

export const registerUser = (userData) => api.post('/register', userData);

export const loginUser = (credentials) => api.post('/login', credentials);

export const getRegistrations = () => api.get('/registrations');

export default api;