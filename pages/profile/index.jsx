import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../stores/action/user";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
export default function Profile() {
  // const id = window.localStorage.getItem("userId");
  const dispatch = useDispatch();
  const router = useRouter();
  const [users, setUser] = useState("");
  useEffect(() => {
    getdataUserId();
  }, []);
  const user = useSelector((state) => state.user);
  const getdataUserId = async () => {
    try {
      const dataUser = await dispatch(
        getUserById(localStorage.getItem("userId"))
      );
      setUser(dataUser.action.payload.data.data);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(users.firstName);
  const handlePersonalInformation = () => {
    router.push("/profile/personalInformation");
  };
  const handleChangePassword = () => {
    router.push("/profile/changePasword");
  };
  const handleChangePin = () => {
    router.push("/profile/changePin");
  };
  const handleLogOut = () => {
    router.push("/login");
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>
          <div className="col-9 profile__border">
            <img
              src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${users.image}`}
              alt="profileImage "
              className="profile__image"
            />
            <button className="profile__edit">edit</button>
            <h5>{users.firstName + " " + users.lastName}</h5>
            <p>{users.noTelp}</p>
            <div
              className="profile__option"
              onClick={handlePersonalInformation}
            >
              <div className="row">
                <div className="col-8">
                  <p className="profile__option__page">Personal Information</p>
                </div>
                <div className="col-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="profile__option" onClick={handleChangePassword}>
              <div className="row">
                <div className="col-8">
                  <p className="profile__option__page">Change Password</p>
                </div>
                <div className="col-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="profile__option" onClick={handleChangePin}>
              <div className="row">
                <div className="col-8">
                  <p className="profile__option__page">Change Pin</p>
                </div>
                <div className="col-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="profile__option" onClick={handleLogOut}>
              <div className="row">
                <div className="col-8">
                  <p className="profile__option__page">Log Out</p>
                </div>
                <div className="col-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
