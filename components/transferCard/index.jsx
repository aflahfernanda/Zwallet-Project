import React from "react";

export default function TransferCard() {
  return (
    <div className="historyCard">
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
          <p>+62 813-8492-9994</p>
        </div>
      </div>
    </div>
  );
}
