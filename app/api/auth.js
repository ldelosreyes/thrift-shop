import api from "./api";
import endpoints from "./endpoints";

const login = (email, password) =>
  api.post(endpoints.AUTH, { email, password });

export default {
  login,
};
