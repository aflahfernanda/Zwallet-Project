import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../stores/action/register";
import { useRouter } from "next/router";
import { useStore } from "react-redux";
export default function signup() {
  const dispatch = useDispatch();
  const { store } = useStore();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [userId, setUserId] = useState("");
  console.log(userId);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const resultRegister = await dispatch(postRegister(form));
      // console.log((await resultRegister.payload).data.data.id);
      setUserId(resultRegister.action.payload.data.data.id);
      setMessage(resultRegister.action.payload.data.msg);
      setError(false);
      router.push("/signUp/succes");
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
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control email"
                  placeholder="Enter your firstname"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  name="firstName"
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
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control email"
                  placeholder="Enter your lastname"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  name="lastName"
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
                  placeholder="Create your password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  name="password"
                  onChange={handleChangeForm}
                />
              </div>
              <hr />
              {!isError ? (
                <h6 className="succesMessage">{message}</h6>
              ) : (
                <h6 className="errorMessage">{message}</h6>
              )}
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block buttoncolor"
                onClick={handleRegister}
              >
                Sign Up
              </button>
              <p className="account">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    router.push("/login");
                  }}
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "#6379F4",
                  }}
                >
                  Lets Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
