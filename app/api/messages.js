import api from "./api";
import endpoints from "./endpoints";

const send = (message, listingId) =>
  api.post(endpoints.MESSAGES, {
    message,
    listingId,
  });

export default {
  send,
};
