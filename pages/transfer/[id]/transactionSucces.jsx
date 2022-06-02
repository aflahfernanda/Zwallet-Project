import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, getCheckPinUser } from "../../.././stores/action/user";
import { getDataExport } from "../../../stores/action/export";
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
  const [users, setUser] = useState([]);
  const [account, setAccount] = useState([]);
  const [pdf, setPdf] = useState("");

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
  useEffect(() => {
    getdataExport();
  }, []);
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
  const getdataExport = async () => {
    try {
      const dataUser = await dispatch(getDataExport(router.query.idTrans));
      setPdf(dataUser.action.payload.data.data.url);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handlePdf = () => {
    router.push(pdf);
  };
  console.log(form);
  console.log(pdf);
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
                fill="green"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <h5 style={{ marginTop: "20px" }}>Transaction Succes</h5>
            </div>
            <div className="transtactionStatus__userInfo">
              <p>Amount</p>
              <h4>Rp{router.query.amount}</h4>
            </div>
            <div className="transtactionStatus__userInfo">
              <p>Balance Left</p>
              <h4>{account.balance - router.query.amount}</h4>
            </div>
            <div className="transtactionStatus__userInfo">
              <p>Date & Time</p>
              <h4>May 11, 2020 - 12.20</h4>
            </div>
            <div className="transtactionStatus__userInfo">
              <p>Notes</p>
              <h4>{router.query.notes}</h4>
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
              <div className="col-7"></div>
              <div className="col-5">
                <a href={pdf}>
                  <button className="button__status" onClick={handlePdf}>
                    Export To PDF
                  </button>
                </a>
                <button
                  className="button__status"
                  onClick={() => router.push("/dashboard/home")}
                >
                  Back To Home
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
