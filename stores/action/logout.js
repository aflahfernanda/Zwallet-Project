import axios from "../../utils/axios";

export const postLogOut = () => {
  return {
    type: "POST_LOGOUT",
    payload: axios.post(`auth/logout`),
  };
};
