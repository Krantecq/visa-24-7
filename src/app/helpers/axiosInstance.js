import axios from "axios";

const Instance = axios.create({
  baseURL: window.location.origin,
  credentials: "include",
  withCredentials: true,
});
export default Instance;
