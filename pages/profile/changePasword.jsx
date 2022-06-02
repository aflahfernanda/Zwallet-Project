import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updatePasswordUser } from "../../stores/action/user";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";
import Cookies from "js-cookie";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const [users, setUser] = useState("");
  useEffect(() => {
    getdataUserId();
  }, []);
  const user = useSelector((state) => state.user);
  const getdataUserId = async () => {
    try {
      const dataUser = await dispatch(getUserById(Cookies.get("userId")));
      setUser(dataUser.action.payload.data.data);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
  };
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(true);
  const id = users.id;
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlePassword = async (e) => {
    try {
      e.preventDefault();
      const resultPassword = await dispatch(updatePasswordUser(id, form));
      // console.log((await resultRegister.payload).data.data.id);
      setMessage(resultPassword.action.payload.data.msg);
      setError(false);
      console.log(resultPassword);
    } catch (error) {
      console.log(error.response);
      setError(true);
      setMessage(error.response.data.msg);
    }
  };
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>
          <div className="col-9 profile__border__change">
            <h5>Change Password</h5>
            <p className="profile__border__change__description">
              You must enter your current password and then <br /> type your new
              password twice.
            </p>
            <div className="profile__border__change__input">
              <div class="input-group mb-3 profile__border__change__password">
                <div className="input-group-prepend profile__border__change__passwordBox">
                  <span
                    className="input-group-text profile__border__change__passwordBox"
                    id="basic-addon1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-lock "
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                    </svg>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control profile__border__change__passwordBox  "
                  placeholder="Current password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="oldPassword"
                  onChange={handleChangeForm}
                />
                <hr />
              </div>
              <hr className="profile__border__change__line" />
              <div class="input-group mb-3 profile__border__change__password">
                <div className="input-group-prepend profile__border__change__passwordBox">
                  <span
                    className="input-group-text profile__border__change__passwordBox"
                    id="basic-addon1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-lock "
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                    </svg>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control profile__border__change__passwordBox  "
                  placeholder="New password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="newPassword"
                  onChange={handleChangeForm}
                />
                <hr />
              </div>
              <hr className="profile__border__change__line" />
              <div class="input-group mb-3 profile__border__change__password">
                <div className="input-group-prepend profile__border__change__passwordBox">
                  <span
                    className="input-group-text profile__border__change__passwordBox"
                    id="basic-addon1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-lock "
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                    </svg>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control profile__border__change__passwordBox  "
                  placeholder="Repeat New Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="confirmPassword"
                  onChange={handleChangeForm}
                />
              </div>
              <hr className="profile__border__change__line" />
              {!isError ? (
                <h6 className="succesMessage">{message}</h6>
              ) : (
                <h6 className="errorMessage">{message}</h6>
              )}
              <button
                className="profile__border__changePassword"
                onClick={handlePassword}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
