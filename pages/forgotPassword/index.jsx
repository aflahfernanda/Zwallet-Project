import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postForgotPassword } from "../../stores/action/password";
export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(true);
  const [form, setForm] = useState({
    email: "",
    linkDirect: "http://localhost:3000/forgotPassword/",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resultPassword = await dispatch(postForgotPassword(form));
      setMessage((await resultPassword.payload).data.msg);
      setError(false);
      // setTimeout(() => {
      //   navigate("/");
      // }, 1000);
    } catch (error) {
      console.log(error.response);
      setError(true);
      setMessage(error.response.data.msg);
    }
  };
  console.log(form);
  return (
    <div>
      <div className="row rowclass">
        <div className="col-7 columnflex1">
          <img src="../Zwallet.png" alt="zwallet" className="imageTittle" />
          <img
            src="../group 57.png"
            alt="imageWelcome"
            className="imageProfile"
          />

          <img
            src="../Group 61.png"
            alt="zwallet"
            className="imageDescription"
          />
        </div>
        <div className="col-4 container-fluid inputForm">
          <h3 className="textWelcome__header">
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
            Password In a Minutes.
          </h3>
          <p className="textWelcome">
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text email" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </span>
            </div>
            <input
              type="email"
              className="form-control email"
              placeholder="Enter your e-mail"
              aria-label="Email"
              aria-describedby="basic-addon1"
              name="email"
              onChange={handleChangeForm}
            />
          </div>
          {!isError ? (
            <h6 className="succesMessage">{message}</h6>
          ) : (
            <h6 className="errorMessage">{message}</h6>
          )}

          <div className="col g-3">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block buttoncolor"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
