import { combineReducers } from "redux";
import login from "./login";
import user from "./user";
import register from "./register";
import password from "./password";
import topup from "./topup";
import transfer from "./transfer";
import exports from "./export";
import logout from "./logout";

export default combineReducers({
  login,
  user,
  register,
  password,
  topup,
  transfer,
  exports,
  logout,
});
