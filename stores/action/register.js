import axios from "../../utils/axios";

export const postRegister = (form) => {
  return {
    type: "POST_REGISTER",
    payload: axios.post(`auth/register`, form),
  };
};
