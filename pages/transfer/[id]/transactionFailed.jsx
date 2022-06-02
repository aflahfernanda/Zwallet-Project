import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, getCheckPinUser } from "../../.././stores/action/user";
import { postTransfer } from "../../../stores/action/transfer";
import Nav from "../../../components/nav";
import SideNav from "../../../components/sideNav";
import Footer from "../../../components/footer";
import { useRouter } from "next/router";
import { Button, Modal } from "react-bootstrap";
import Cookies from "js-cookie";
export default function TransferConfirmationSucces() {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(router);
  const id = "e8e58876-8c48-44c4-92da-5d19f87bc074";
  const [usersPin, setUserPin] = useState([]);
  const [users, setUser] = useState([]);
  const [account, setAccount] = useState([]);
  const [pin, setPin] = useState(false);
  const [pinKey, setPinKey] = useState({
    id: "e8e58876-8c48-44c4-92da-5d19f87bc074",
    pin: Number(""),
  });

  const [form, setForm] = useState({
    receiverId: router.query.id,
    amount: router.query.amount,
    notes: router.query.notes,
  });
  useEffect(() => {
    getdataUserId();
  }, []);
  useEffect(() => {
    getUserId();
  }, []);
  const handleChangePin = (e) => {
    setPinKey({ ...form, [e.target.name]: e.target.value });
  };
  const getUserId = async () => {
    try {
      const dataUser = await dispatch(getUserById(Cookies.get("userId")));
      setAccount(dataUser.action.payload.data.data);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getdataUserId = async () => {
    try {
      const dataUser = await dispatch(getUserById(router.query.id));
      setUser(dataUser.action.payload.data.data);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
  };
  const postDataTransfer = async (e) => {
    try {
      e.preventDefault();
      const resultTransfer = await dispatch(postTransfer(form));
      console.log(resultTransfer);
      router.push();
    } catch (error) {
      console.log(error.response);
      setError(true);
      setMessage(error.response.data.msg);
    }
  };
  // const handleConfirm = () => {
  //   router.push(`/transfer/${id}/confirmation`);
  // };
  const handleHome = () => {
    router.push("/transfer");
  };
  console.log(form);
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>

          <div className="col-9 transfer__userTransfer">
            <div className="transtactionStatus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="red"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
              <h5 style={{ marginTop: "20px" }}>Transaction Failed</h5>
            </div>
            <div className="transtactionStatus__userInfo">
              <p>Amount</p>
              <h4>Rp100.000</h4>
            </div>
            <div className="transtactionStatus__userInfo">
              <p>Balance Left</p>
              <h4>Rp100.000</h4>
            </div>
            <div className="transtactionStatus__userInfo">
              <p>Date & Time</p>
              <h4>Rp100.000</h4>
            </div>
            <div className="transtactionStatus__userInfo">
              <p>Notes</p>
              <h4>Rp100.000</h4>
            </div>
            <div className="transfer__userBox">
              <div className="row">
                <div className="col-2">
                  <img
                    src={
                      users.image
                        ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${users.image}`
                        : "/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                    }
                    alt="profile"
                    className="historyCard__profilePicture"
                  />
                </div>
                <div className="col-9">
                  <h3>{users.firstName + " " + users.lastName}</h3>
                  <p>{users.noTelp}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10"></div>
              <div className="col-2">
                <button className="button__status" onClick={handleHome}>
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
