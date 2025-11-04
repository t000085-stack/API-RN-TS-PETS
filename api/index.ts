import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
});

export default apiClient;
