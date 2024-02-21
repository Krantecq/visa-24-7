import axios from "axios";

const Instance = axios.create({
  // baseURL: 'http://64.227.160.58:5003',
  baseURL: 'http://134.209.152.146:5003',
  credentials: "include",
  withCredentials: true,
});
export default Instance;
