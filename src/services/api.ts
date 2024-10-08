import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api`,
  withCredentials: true,
  // timeout: 1000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    //   const accessToken = JSON.parse(localStorage.getItem("token"));

    //   // If token is present, add it to request's Authorization Header
    //   if (accessToken) {
    //     if (config.headers) config.headers.token = accessToken;
    //   }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default api;
