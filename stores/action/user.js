import axios from "../../utils/axios";
import user from "../reducer/user";

export const getDataUser = () => {
  return {
    type: "GET_DATA_USER",
    payload: axios.get(`user?page=1&limit=4&search=&sort=firstName ASC`),
  };
};
export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/profile/${id}`),
  };
};
export const updatePinUser = (id, form) => {
  return {
    type: "UPDATE_PIN_USER",
    payload: axios.patch(`user/pin/${id}`, form),
  };
};
export const updatePasswordUser = (id, form) => {
  return {
    type: "UPDATE_PASSWORD_USER",
    payload: axios.patch(`user/password/${id}`, form),
  };
};
export const updatePhoneUser = (id, form) => {
  return {
    type: "UPDATE_PHONE_USER",
    payload: axios.patch(`user/profile/${id}`, form),
  };
};
