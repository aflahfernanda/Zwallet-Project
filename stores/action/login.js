import axios from "../../utils/axios";

export const postLogin = (form) => {
  return {
    type: "POST_LOGIN",
    payload: axios.post(`auth/login`, form),
  };
};
