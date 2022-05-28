import React, { useState } from "react";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import Footer from "../../components/footer";
import HistoryCard from "../../components/historyCard";

export default function History() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>
          <div className="col-9">
            <div>
              <div className="row">
                <div className="col-9">
                  <h4>Transaction History</h4>
                </div>
                <div className="col-3">
                  <select>
                    <option value="">A-Z</option>
                    <option value="">Z-A</option>
                  </select>
                </div>
              </div>
              <div className="dashboardPage__transactionHistory">
                <HistoryCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
