import axios from "axios";

const Instance = axios.create({
  baseURL: `${import.meta.env.MODE === "development" ? `${import.meta.env.VITE_REACT_API_URL}`: window.location.origin}`,
  credentials: "include",
  withCredentials: true,
});
export default Instance;
