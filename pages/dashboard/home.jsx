import React, { useState } from "react";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import Footer from "../../components/footer";
import HistoryCard from "../../components/historyCard";

export default function Home() {
  const [viewAll, setHandleViewAll] = useState(true);
  const handleViewAll = () => {
    setHandleViewAll(false);
  };
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>

          <div className="col-9">
            <div className="dashboardPage">
              <div className=" dashboardPage__info row">
                <div className="col-9">
                  <p>Balance</p>
                  <h1>Rp120.000</h1>
                  <p>+62 813-9387-7946</p>
                </div>
                <div className=" col-3 dashboardPage__info__button">
                  <button className="buttonTransfer">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    Transfer
                  </button>
                  <button className="buttonTopUp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    Top Up
                  </button>
                </div>
              </div>
              <div className=" status row">
                <div className="col-7">
                  <div className="dashboardPage__info__historyBar">
                    <div className="row">
                      <div className="col-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="green"
                          className="bi bi-arrow-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                          />
                        </svg>
                        <p> Income</p>
                        <h4 className="dashboardPage__info__historyBar__price">
                          Rp1.560.000
                        </h4>
                      </div>
                      <div className="col-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="red"
                          className="bi bi-arrow-up"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                          />
                        </svg>

                        <p> Expense</p>
                        <h4 className="dashboardPage__info__historyBar__price">
                          Rp2.120.000
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="dashboardPage__info__historyStatus">
                    <div className="row">
                      <div className="col-8">
                        <h6 className="dashboardPage__info__historyStatusHeader ">
                          Transaction History
                        </h6>
                      </div>
                      <div className="col-4">
                        <h6
                          onClick={handleViewAll}
                          className="dashboardPage__info__historyStatus__viewAll"
                        >
                          View All
                        </h6>
                      </div>
                    </div>
                    <HistoryCard />
                  </div>
                </div>
              </div>
            </div>

            <div className="status__responsive">
              <h6
                onClick={handleViewAll}
                className="dashboardPage__info__historyStatus__viewAll"
              >
                View All
              </h6>
              <div className="dashboardPage__info__historyBar">
                <div className="row">
                  <div className="col-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="green"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>
                    <p> Income</p>
                    <h4 className="dashboardPage__info__historyBar__price">
                      Rp1.560.000
                    </h4>
                  </div>
                  <div className="col-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="red"
                      className="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>

                    <p> Expense</p>
                    <h4 className="dashboardPage__info__historyBar__price">
                      Rp2.120.000
                    </h4>
                  </div>
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
