// src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:3000";  // base da sua API

// Cria instância axios com baseURL e JSON
const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Interceptor: injeta token em todas as requisições
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export async function login(email, password) {
  const response = await api.post("/auth/login", { email, password });
  const { token } = response.data;
  localStorage.setItem("token", token);
  return token;
}

export function logout() {
  localStorage.removeItem("token");
}

export function getApi() {
  return api;
}