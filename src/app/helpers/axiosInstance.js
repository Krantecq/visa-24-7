import axios from "axios";

const Instance = axios.create({
  baseURL: 'http://69.55.55.245:5003',
  credentials: "include",
  withCredentials: true,
});
export default Instance;
