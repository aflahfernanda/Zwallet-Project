import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, getCheckPinUser } from "../../stores/action/user";
import Image from "next/image";

import { useRouter } from "next/router";
import { Button, Modal } from "react-bootstrap";
import Cookies from "js-cookie";

export default function Nav() {
  const [account, setAccount] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    try {
      const dataUser = await dispatch(getUserById(Cookies.get("userId")));
      setAccount(dataUser.action.payload.data.data);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <nav className=" sticky navbar navbar-light bg-light navDesign justify-content-between">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              src="/Zwallet nav.png"
              width={"100px"}
              height={"30px"}
              className="d-inline-block align-top"
              alt="logo"
            />
          </a>
          <div className="width">
            <div className="row">
              <div className="col-sm">
                <img
                  src={
                    account.image
                      ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${account.image}`
                      : "/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                  }
                  alt="profile"
                  className="historyCard__profilePicture"
                />
              </div>
              <div className="col-sm">
                <p className="nameProfile">
                  {account.firstName + " " + account.lastName}
                </p>
                <p className="phoneNumber">{account.noTelp}</p>
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
