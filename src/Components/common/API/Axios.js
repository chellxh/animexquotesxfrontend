import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3916"
      : "DEPLOYURL",
  timeOut: 5000,
});

export default AxiosInstance;
