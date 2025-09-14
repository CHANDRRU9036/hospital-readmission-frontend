// API Configuration
const API_CONFIG = {
  development: 'http://localhost:8000',
  production: 'https://hospital-readmission-api.azurewebsites.net'
};

// Get the current environment
const isDevelopment = import.meta.env.DEV;
const customApiUrl = import.meta.env.VITE_API_URL;

// Determine the API URL
export const API_URL = customApiUrl || (isDevelopment ? API_CONFIG.development : API_CONFIG.production);

console.log('API URL configured as:', API_URL);
