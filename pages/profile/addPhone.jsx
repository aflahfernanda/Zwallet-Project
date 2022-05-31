import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updatePhoneUser } from "../../stores/action/user";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";

export default function AddPhone() {
  const dispatch = useDispatch();
  const [users, setUser] = useState("");
  useEffect(() => {
    getdataUserId();
  }, []);
  const user = useSelector((state) => state.user);
  const getdataUserId = async () => {
    try {
      const dataUser = await dispatch(
        getUserById(localStorage.getItem("userId"))
      );
      setUser(dataUser.action.payload.data.data);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
  };
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(true);
  const id = users.id;
  const [form, setForm] = useState({
    noTelp: "",
  });
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlePhone = async (e) => {
    try {
      e.preventDefault();
      const resultPhone = await dispatch(updatePhoneUser(id, form));
      // console.log((await resultRegister.payload).data.data.id);
      setMessage(await resultPhone.action.payload.data.msg);
      setError(false);
      console.log(resultPhone);
    } catch (error) {
      console.log(error.response);
      setError(true);
      setMessage(error.response.data.msg);
    }
  };
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>
          <div className="col-9 profile__border__change">
            <h5>Add Phone Number</h5>
            <p className="profile__border__change__description">
              Add at least one phone number for the transfer <br /> ID so you
              can start transfering your money to <br />
              another user.
            </p>
            <div className="profile__border__change__input">
              <div class="input-group mb-3 profile__border__change__password">
                <div className="input-group-prepend profile__border__change__passwordBox">
                  <span
                    className="input-group-text profile__border__change__passwordBox"
                    id="basic-addon1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    +62
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control profile__border__change__passwordBox  "
                  placeholder="Enter your phone number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="noTelp"
                  onChange={handleChangeForm}
                />
                <hr />
              </div>
              <hr className="profile__border__change__line" />
              {!isError ? (
                <h6 className="succesMessage">{message}</h6>
              ) : (
                <h6 className="errorMessage">{message}</h6>
              )}
              <button
                className="profile__border__changePassword"
                onClick={handlePhone}
              >
                Add Phone Number
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
