import axios from "axios";

const API = axios.create({
  baseURL: "https://travelblog-f6aj.onrender.com"
});

export default API;