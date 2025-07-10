import axios from "axios";

const API_URL = "http://localhost:3000";

export async function getProdutos() {
  const response = await axios.get(`${API_URL}/produtos`);
  return response.data.message; // <<< CORRETO
}
