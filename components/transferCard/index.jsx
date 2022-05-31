import Router from "next/router";
import React from "react";

export default function TransferCard(props) {
  const { id, firstName, lastName, noTelp, image } = props.data;
  // const handleDetailUser = () => {
  //   console.log("cilck");
  // };
  return (
    <div className="historyCard" onClick={() => props.handleDetail(id)}>
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
          <p>{noTelp}</p>
        </div>
      </div>
    </div>
  );
}
