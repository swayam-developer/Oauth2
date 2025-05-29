import axios from "axios";

const api = axios.create({
  baseURL: "https://oauth2-backend.onrender.com/auth",
});
export const googleAuth = (code) => api.get(`/google?code=${code}`);
