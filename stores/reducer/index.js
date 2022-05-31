import { combineReducers } from "redux";
import login from "./login";
import user from "./user";
import register from "./register";
import password from "./password";
import topup from "./topup";

export default combineReducers({
  login,
  user,
  register,
  password,
  topup,
});
