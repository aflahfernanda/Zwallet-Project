import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateForgotPassword } from "../../stores/action/password";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const setId = router.query.id;
  console.log(router.query.id);
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(true);
  const [form, setForm] = useState({
    keysChangePassword: router.query.id,
    newPassword: "",
    confirmPassword: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resultPassword = await dispatch(updateForgotPassword(form));
      console.log(resultPassword);
      setMessage(resultPassword.action.payload.data.msg);
      setError(false);
      router.push("/login");
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
            Now you can create a new password for your Zwallet <br /> account.
            Type your password twice so we can confirm your <br />
            new passsword.
          </p>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text email" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
              </span>
            </div>
            <input
              type="password"
              className="form-control email"
              placeholder="Create New Password"
              aria-label="Email"
              aria-describedby="basic-addon1"
              name="newPassword"
              onChange={handleChangeForm}
            />
          </div>
          <hr />
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text email" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
              </span>
            </div>
            <input
              type="password"
              className="form-control email"
              placeholder="Confirm new password"
              aria-label="Email"
              aria-describedby="basic-addon1"
              name="confirmPassword"
              onChange={handleChangeForm}
            />
          </div>
          <hr />
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
