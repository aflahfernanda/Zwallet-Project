import React, { useState } from "react";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";

export default function ManagePhone() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>
          <div className="col-9 profile__border__change">
            <h5>Manage Phone Number</h5>
            <p className="profile__border__change__description">
              You can only delete the phone number and then <br /> you must add
              another phone number.
            </p>
            <div className="profile__border__change__inputManage">
              <h6>primary</h6>
              <div className="row">
                <div className="col-9">
                  <h4>+62 813 9387 7946</h4>
                </div>
                <div className="col-3 profile__border__change__inputManage__margin ">
                  <button className="profile__border__change__inputManage__button">
                    {" "}
                    <img src="/delete.png" alt="delete" />
                  </button>
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
