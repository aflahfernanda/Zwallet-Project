import axios from "../../utils/axios";

export const postForgotPassword = (form) => {
  return {
    type: "POST_PASSWORD",
    payload: axios.post(`auth/forgot-password`, form),
  };
};
export const updateForgotPassword = (form) => {
  return {
    type: "UPDATE_PASSWORD",
    payload: axios.patch(`auth/reset-password`, form),
  };
};
