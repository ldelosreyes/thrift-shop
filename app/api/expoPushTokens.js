import api from "./api";
import endpoints from "./endpoints";

const register = (pushToken) =>
  api.post(endpoints.EXPO_PUSH_TOKENS, { token: pushToken });

export default {
  register,
};
