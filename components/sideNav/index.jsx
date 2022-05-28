import React from "react";

export default function SideNav() {
  return (
    <div>
      <nav className="backgroundNav">
        <div className="dashboardNav">
          <div className="row">
            <div className="col-3">
              <img src="/dashboard.png" alt="dashboard" />
            </div>
            <div className="col-8">
              <p className="dash">Dashboard</p>
            </div>
          </div>
        </div>
        <div className="transfer">
          <div className="row">
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
            </div>
            <div className="col-8">
              <p className="transferText">Transfer</p>
            </div>
          </div>
        </div>
        <div className="topUp">
          <div className="row">
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
            <div className="col-8">
              <p className="topUpText">Top Up</p>
            </div>
          </div>
        </div>
        <div className="profileNav">
          <div className="row">
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </div>
            <div className="col-8">
              <p className="profileText">Profile</p>
            </div>
          </div>
        </div>
        <div className="logOut">
          <div className="row">
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </div>
            <div className="col-8">
              <p className="logOutText">Log Out</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
