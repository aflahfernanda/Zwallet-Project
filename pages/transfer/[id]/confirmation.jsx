import React, { useState } from "react";
import Nav from "../../../components/nav";
import SideNav from "../../../components/sideNav";
import TransferCard from "../../../components/transferCard";
import Footer from "../../../components/footer";

export default function TransferConfirmation() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>

          <div className="col-9 transfer__userTransfer">
            <h5>Transfer To</h5>
            <TransferCard />
            <div>
              <h5 className="transfer__userTransfer__header">Details</h5>
              <div className="transfer__userTransfer__box">
                <p>Amount</p>
                <h5>Rp100.000</h5>
              </div>
              <div className="transfer__userTransfer__box">
                <p>Balance Left</p>
                <h5>Rp20.000</h5>
              </div>
              <div className="transfer__userTransfer__box">
                <p>Date & Time</p>
                <h5>May 11, 2020 - 12.20</h5>
              </div>
              <div className="transfer__userTransfer__box">
                <p>Notes</p>
                <h5>For buying some socks</h5>
              </div>
            </div>
            <div className="transfer__button">
              <button className="transfer__button__button">Continue</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
