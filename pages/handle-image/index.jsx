import React from "react";
import Image from "next/image";

const imageProfile = {
  width: "150 px",
  backgroundColor: "red",
};
export default function HandleImage() {
  return (
    <div className="cona=tainer text-center">
      <h1>Handle Image</h1>
      <hr />
      <h4>without next image</h4>
      <img src="../vercel.svg" alt="ivg" style={imageProfile} />
      <h4>with next image</h4>
      <div style={imageProfile}>
        <Image
          src={"/group57.png"}
          alt="Picture of the author"
          width="350px"
          height="300px"
          layout="responsive"
        />
      </div>
    </div>
  );
}
