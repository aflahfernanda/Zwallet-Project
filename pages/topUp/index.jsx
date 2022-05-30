import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../../stores/action/user";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";

export default function TopUp() {
  const dispatch = useDispatch();
  const [users, setUser] = useState([]);
  useEffect(() => {
    getdataUser();
  }, []);
  const user = useSelector((state) => state.user);
  const getdataUser = async () => {
    try {
      const dataUser = await dispatch(getDataUser());
      setUser((await dataUser.payload).data.data);
    } catch (error) {
      console.log(error.response);
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

          <div className="col-9 transfer__userTransfer">
            <h5>Search Receiver</h5>
            <div className="input-group mb-3 ">
              <div className="input-group-prepend">
                <span className="input-group-text searchBar" id="basic-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-search "
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="form-control searchBar "
                placeholder="Search Receiver Here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div>
              <TransferCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
