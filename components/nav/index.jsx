import React from "react";

export default function Nav() {
  return (
    <div>
      <nav className=" sticky navbar navbar-light bg-light navDesign justify-content-between">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/Zwallet nav.png"
              width="100px"
              className="d-inline-block align-top"
              alt="logo"
            />
          </a>
          <div className="width">
            <div className="row">
              <div className="col-sm">
                <img
                  src="/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                  alt="profileImage"
                  width="50px"
                  className="profilePhoto"
                />
              </div>
              <div className="col-sm">
                <p className="nameProfile">Robert Chandler</p>
                <p className="phoneNumber">+62 8139 3877 7946</p>
              </div>
              <div className="col-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-bell notification"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
