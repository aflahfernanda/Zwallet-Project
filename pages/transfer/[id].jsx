import React, { useState } from "react";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";

export default function TransferId() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>

          <div className="col-9 transfer__userTransfer">
            <h5>Transfer Money</h5>
            <TransferCard />
            <p>
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </p>
            <div>
              <div className="transfer__input">
                <div>
                  <input
                    type="number"
                    className="transfer__nominal"
                    placeholder="0.00"
                  />
                </div>
                <h6>Rp120.000 Available</h6>
                <div>
                  <input
                    type="text"
                    placeholder="add some notes"
                    className="transfer__addNotes"
                  />
                  <hr />
                </div>
              </div>
              <div className="transfer__button">
                <button className="transfer__button__button">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
