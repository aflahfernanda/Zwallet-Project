import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../stores/action/login";
import { getUserById } from "../../stores/action/user";

export default function login() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  console.log(isError);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resultLogin = await dispatch(postLogin(form));
      console.log(resultLogin);
      localStorage.setItem("userId", resultLogin.action.payload.data.data.id);
      localStorage.setItem("pin", resultLogin.action.payload.data.data.pin);
      localStorage.setItem("token", resultLogin.action.payload.data.data.token);
      setMessage(resultLogin.action.payload.data.msg);
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
            {" "}
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </h3>
          <p className="textWelcome">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>

          <div className="col g-3">
            <div className="col">
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
                  placeholder="Type Your Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  name="email"
                  onChange={handleChangeForm}
                />
              </div>
            </div>
            <hr />
            <div className="col">
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
                  className="form-control py-2 border-start-0 email"
                  placeholder="Type Your Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  name="password"
                  onChange={handleChangeForm}
                />
              </div>
              <hr />
              <p className="forgotPassword">forgot password?</p>
              {!isError ? (
                <h6 className="succesMessage">{message}</h6>
              ) : (
                <h6 className="errorMessage">{message}</h6>
              )}

              <button
                type="button"
                className="btn btn-primary btn-lg btn-block buttoncolor"
                onClick={handleSubmit}
              >
                Log In
              </button>
              <p className="account">Dont have an account? Lets Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
