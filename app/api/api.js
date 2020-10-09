import { create } from "apisauce";
import { authStorage } from "../auth";
import { settings } from "../config";
import { cache } from "../utilities";

const api = create({
  baseURL: settings.apiUrl,
});

api.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
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
