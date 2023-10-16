import axios from "axios";

const Instance = axios.create({
  baseURL: 'http://165.232.186.7:5003',
  credentials: "include",
  withCredentials: true,
});
export default Instance;
