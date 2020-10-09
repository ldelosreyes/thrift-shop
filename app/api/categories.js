import api from "./api";
import endpoints from "./endpoints";

const getCategories = () => api.get(endpoints.CATEGORIES);

export default {
  getCategories,
};