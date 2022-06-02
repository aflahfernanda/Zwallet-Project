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
export default function TransferConfirmation() {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(router);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const id = router.query.id;
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
    getCheckDataUser();
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
  const getCheckDataUser = async () => {
    try {
      const dataPin = await dispatch(getCheckPinUser(pinKey));
      setUserPin(dataPin.action.payload.data.data);
      console.log(dataPin);
    } catch (error) {
      console.log(error.response);
    }
  };
  const postDataTransfer = async (e) => {
    try {
      e.preventDefault();
      const resultTransfer = await dispatch(postTransfer(form));
      console.log(resultTransfer);
      router.push({
        pathname: `/transfer/${id}/transactionSucces`,
        query: {
          receiverId: id,
          amount: form.amount,
          notes: form.notes,
          idTrans: resultTransfer.action.payload.data.data.id,
        },
      });
    } catch (error) {
      console.log(error.response);
      setError(true);
      setMessage(error.response.data.msg);
      router.push({
        pathname: `/transfer/${id}/transactionFailed`,
        query: { id: id },
      });
    }
  };
  // const handleConfirm = () => {
  //   router.push(`/transfer/${id}/confirmation`);
  // };
  const handlePin = () => {
    setPin(true);
  };
  const handleNotPin = () => {
    setPin(false);
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
            <h5>Transfer To</h5>
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
            <div>
              <h5 className="transfer__userTransfer__header">Details</h5>
              <div className="transfer__userTransfer__box">
                <p>Amount</p>
                <h5>Rp {router.query.amount}</h5>
              </div>
              <div className="transfer__userTransfer__box">
                <p>Balance Left</p>
                <h5>Rp{account.balance - router.query.amount}</h5>
              </div>
              <div className="transfer__userTransfer__box">
                <p>Date & Time</p>
                <h5>May 11, 2020 - 12.20</h5>
              </div>
              <div className="transfer__userTransfer__box">
                <p>Notes</p>
                <h5>{router.query.notes}</h5>
              </div>
            </div>
            <div className="transfer__button">
              <button className="transfer__button__button" onClick={handlePin}>
                Continue
              </button>
              <Modal show={pin} className="modalBox">
                <Modal.Header>
                  <div className="transfertext">
                    <div className="row">
                      <div className="col-9">
                        <h5 className="transferText">Enter PIN to Transfer</h5>
                      </div>
                      <div className="col-3 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-x"
                          viewBox="0 0 16 16"
                          onClick={handleNotPin}
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Enter your 6 digits PIN for confirmation to continue
                    transferring money.{" "}
                  </p>
                  <div className="inputTopUp">
                    <input
                      type="number"
                      name="pin"
                      className="inputTopUpBox"
                      onChange={handleChangePin}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={postDataTransfer}>Submit</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
