import { create } from "apisauce";

const api = create({
  baseURL: "http://192.168.100.43:9000/api",
});

export default api;
