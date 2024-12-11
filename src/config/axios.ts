import axios, { AxiosInstance } from "axios"

const API_BASE_URL = 'http://localhost:8080';

const api: AxiosInstance = axios.create({
    baseURL: `${API_BASE_URL}/students`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
// api.interceptors.response.use(
//   response => response,
//   error => {
//     alert('An error occurred: ' + (error.response?.data?.message || error.message));
//     return Promise.reject(error);
//   }
// );
  
export default api;