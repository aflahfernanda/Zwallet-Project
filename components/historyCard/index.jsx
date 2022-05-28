import React from "react";

export default function HistoryCard() {
  return (
    <div className="historyCard">
      {/* <div className="row">
        <div className="col-6 col-md-4">
          <img
            src="/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
            alt="profile"
            className="historyCard__profilePicture"
          />
        </div>
        <div className="col-6 col-md-4">
          <p>Samuel Suhi</p>
          <p>Accept</p>
        </div>
        <div className="col-6 col-md-4">
          <p>+Rp50.000</p>
        </div>
      </div> */}
      <div className="historyCard__flex">
        <div className="historyCard__flex1">
          <img
            src="/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
            alt="profile"
            className="historyCard__profilePicture"
          />
        </div>
        <div className="historyCard__flex2">
          <p className="historyCard__profileName">Samuel Suhi</p>
          <p>Accept</p>
        </div>
        <div className="historyCard__flex3">
          <p className="historyCard__status">+Rp50.000</p>
        </div>
      </div>
    </div>
  );
}
