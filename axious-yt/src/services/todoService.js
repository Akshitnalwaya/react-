import axios from "axios";

const API_BASE = "http://localhost:8090/task";

export const fetchTodos = async () => {
  const response = await axios.get(`${API_BASE}/view`);
  return response.data.todos || [];
};

export const createTodo = async (text) => {
  return axios.post(`${API_BASE}/new`, { text });
};
