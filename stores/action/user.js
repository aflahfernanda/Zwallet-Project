import axios from "../../utils/axios";
import user from "../reducer/user";

export const getDataUser = () => {
  return {
    type: "GET_DATA_USER",
    payload: axios.get(`user?page=1&limit=50&search=&sort=firstName ASC`),
  };
};
export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/profile/${id}`),
  };
};
export const updatePinUser = (form, userId) => {
  return {
    type: "UPDATE_PIN_USER",
    payload: axios.patch(`user/pin/${userId}`, form),
  };
};
