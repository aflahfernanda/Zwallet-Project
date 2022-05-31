import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../stores/action/user";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
export default function TransferId() {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.id;
  const [users, setUser] = useState([]);
  useEffect(() => {
    getdataUserId();
  }, []);

  const getdataUserId = async () => {
    try {
      const dataUser = await dispatch(getUserById(id));
      setUser(dataUser.action.payload.data.data);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(users);
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
                    src="/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                    alt="userImage"
                    width={"100px"}
                  />
                </div>
                <div className="col-9">
                  <h3>{users.firstName + " " + users.lastName}</h3>
                  <p>+{users.noTelp}</p>
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
                  />
                </div>
                <h6>Rp120.000 Available</h6>
                <div>
                  <input
                    type="text"
                    placeholder="add some notes"
                    className="transfer__addNotes"
                  />
                  <hr />
                </div>
              </div>
              <div className="transfer__button">
                <button className="transfer__button__button">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
