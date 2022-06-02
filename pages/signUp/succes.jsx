import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../stores/action/register";
export default function SignUpSucces() {
  const router = useRouter();
  const dispatch = useDispatch();

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="yellowgreen"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
            style={{ marginTop: "60px" }}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          <h3 className="textWelcome__header">Succes Register Your Account</h3>
          <p className="textWelcome">
            Your Account was successfully registered and you can now access the
            features in Zwallet. kindly{" "}
            <strong>check your email to activate</strong> then Login to your new
            account and start exploring!
          </p>
          <div className="col g-3">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block buttoncolor"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
