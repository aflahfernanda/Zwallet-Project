import axios from "../../utils/axios";

export const postTopUp = (form) => {
  return {
    type: "POST_TOPUP",
    payload: axios.post("transaction/top-up", form),
  };
};
