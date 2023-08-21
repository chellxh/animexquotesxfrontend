import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3916"
      : "https://iamine.onrender.com",
  timeOut: 5000,
});

export default AxiosInstance;
