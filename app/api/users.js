import api from "./api";
import endpoints from "./endpoints";

const register = (userInfo) => api.post(endpoints.USERS, userInfo);

export default { register };
