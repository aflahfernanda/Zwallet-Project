import axios from "../../utils/axios";

export const postLogin = () => {
  return {
    type: "POST_LOGIN",
    payload: axios.post(`auth/login`),
  };
};
