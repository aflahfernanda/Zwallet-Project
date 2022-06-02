import React from "react";

export default function HistoryCard(props) {
  const { firstName, lastName, image, amount, status } = props.data;
  return (
    <div className="historyCard">
      <div className="historyCard__flex">
        <div className="historyCard__flex1">
          <img
            src={
              image
                ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${image}`
                : "/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
            }
            alt="profile"
            className="historyCard__profilePicture"
          />
        </div>
        <div className="historyCard__flex2">
          <p className="historyCard__profileName">
            {firstName + " " + lastName}
          </p>
          <p>{status}</p>
        </div>
        <div className="historyCard__flex3">
          <p className="historyCard__status">+{amount}</p>
        </div>
      </div>
    </div>
  );
}
