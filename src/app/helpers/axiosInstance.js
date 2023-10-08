import axios from "axios";

const Instance = axios.create({
  baseURL: 'http://localhost:5003',
  credentials: "include",
  withCredentials: true,
});
export default Instance;
