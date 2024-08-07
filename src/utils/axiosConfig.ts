import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const setAuthHeader = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common["Authorization"] = "";
};
