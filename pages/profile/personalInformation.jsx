import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../stores/action/user";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";

import Footer from "../../components/footer";
import { useRouter } from "next/router";

export default function PersonalInformation() {
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
  const handleManagePhone = () => {
    router.push("/profile/addPhone");
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
            <h5>Personal Information</h5>
            <p className="profile__border__change__description">
              We got your personal information from the sign up <br /> proccess.
              If you want to make changes on your <br /> information, contact
              our support.
            </p>
            <div className="profile__border__change__inputManage">
              <h6>First Name</h6>
              <div className="row">
                <div className="col-9">
                  <h5>{users.firstName}</h5>
                </div>
              </div>
            </div>
            <div className="profile__border__change__inputManage">
              <h6>Last Name</h6>
              <div className="row">
                <div className="col-9">
                  <h5>{users.lastName}</h5>
                </div>
              </div>
            </div>
            <div className="profile__border__change__inputManage">
              <h6>Verivied Email</h6>
              <div className="row">
                <div className="col-9">
                  <h5>{users.email}</h5>
                </div>
              </div>
            </div>
            <div className="profile__border__change__inputManage">
              <h6>Manage Phone</h6>
              <div className="row">
                <div className="col-9">
                  <h5>{users.noTelp}</h5>
                </div>
                <div className="col-3 profile__border__change__inputManage__margin ">
                  <h6 style={{ color: "blue" }} onClick={handleManagePhone}>
                    Manage
                  </h6>
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
