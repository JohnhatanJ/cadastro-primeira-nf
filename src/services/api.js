import axios from "axios";

const api = axios.create({
  baseURL: "https://apisgtweb.trimapservicos.com.br/api",
});

export default api;
