import React from "react";
const imageProfile = {
  width: "80%",
};
export default function createPin() {
  return (
    <div>
      <div className="row rowclass">
        <div className="col-7 columnflex1">
          <img src="../Zwallet.png" alt="zwallet" className="imageTittle" />
          <img
            src="../group 57.png"
            alt="imageWelcome"
            className="imageProfile"
          />

          <img
            src="../Group 61.png"
            alt="zwallet"
            className="imageDescription"
          />
        </div>
        <div className="col-4 container-fluid inputForm">
          <h3 className="textWelcome__header">
            {" "}
            Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
            That You Created Yourself.
          </h3>
          <p className="textWelcome">
            Create 6 digits pin to secure all your money and your data in
            Zwallet app. Keep it secret and don’t tell anyone about your Zwallet
            account password and the PIN.
          </p>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text email" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
              </span>
            </div>
            <input
              type="password"
              className="form-control py-2 border-start-0 email"
              placeholder="Create your pin"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <hr />
          <div className="col g-3">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block buttoncolor"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
