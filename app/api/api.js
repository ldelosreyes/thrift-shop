import { create } from "apisauce";
import { cache } from "../utilities";

const api = create({
  baseURL: "http://192.168.100.43:9000/api",
});

const get = api.get;
api.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default api;
