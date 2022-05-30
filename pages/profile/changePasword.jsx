import React, { useState } from "react";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";

export default function ChangePassword() {
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
                />
              </div>
              <hr className="profile__border__change__line" />
              <button className="profile__border__changePassword">
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
