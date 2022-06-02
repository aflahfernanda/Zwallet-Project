import axios from "../../utils/axios";

export const postTransfer = (form) => {
  return {
    type: "POST_TRANSFER",
    payload: axios.post(`transaction/transfer`, form),
  };
};
