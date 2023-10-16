import axios from "axios";

const Instance = axios.create({
  baseURL: 'https://fine-red-eagle-robe.cyclic.app',
  credentials: "include",
  withCredentials: true,
});
export default Instance;
