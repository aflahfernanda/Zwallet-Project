import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../stores/action/user";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { Button, Modal } from "react-bootstrap";
import Cookies from "js-cookie";
export default function TransferId() {
  const router = useRouter();
  const dispatch = useDispatch();

  const id = router.query.id;
  const [users, setUser] = useState([]);
  const [account, setAccount] = useState([]);
  const [form, setForm] = useState({
    receiverId: id,
    amount: "",
    notes: "",
  });
  useEffect(() => {
    getdataUserId();
  }, []);
  useEffect(() => {
    getUserId();
  }, []);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const getdataUserId = async () => {
    try {
      const dataUser = await dispatch(getUserById(id));
      setUser(dataUser.action.payload.data.data);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
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
  const handleConfirm = () => {
    router.push({
      pathname: `/transfer/${id}/confirmation`,
      query: { receiverId: id, amount: form.amount, notes: form.notes },
    });
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
            <h5>Transfer Money</h5>

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
            <p>
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </p>
            <div>
              <div className="transfer__input">
                <div>
                  <input
                    type="number"
                    className="transfer__nominal"
                    placeholder="0.00"
                    name="amount"
                    onChange={handleChangeForm}
                  />
                </div>
                <h6>Rp. {account.balance} Available</h6>
                <div>
                  <input
                    type="text"
                    placeholder="add some notes"
                    className="transfer__addNotes"
                    name="notes"
                    onChange={handleChangeForm}
                  />
                  <hr />
                </div>
              </div>
              <div className="transfer__button">
                <button
                  className="transfer__button__button"
                  onClick={handleConfirm}
                >
                  Continue
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
