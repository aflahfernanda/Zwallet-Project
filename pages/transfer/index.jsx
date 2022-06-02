import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../../stores/action/user";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import TransferCard from "../../components/transferCard";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import Link from "next/link";
import axiosServer from "../../utils/axiosServer";
import cookies from "next-cookies";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const limit = 4;
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const search = !params?.search ? "" : params.search;
    const sort = !params?.sort ? "" : params.sort;
    const result = await axiosServer.get(
      `/user?page=${page}&limit=${limit}&search=${search}&sort=${sort}`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    console.log(result.data.data);
    return {
      props: {
        data: result.data.data,
        page: page,
        search: search,
        sort: sort,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination:
          error.response.status === 403
            ? "/login"
            : `/error?msg=${error.response.data.msg}`,
        permanent: false,
      },
    };
  }
}
export default function Transfer(props) {
  const router = useRouter();
  const [data, setData] = useState(props.data);
  const [page, setPage] = useState(Number(props.page));
  const [search, setSearch] = useState(props.search);
  const [sort, setSort] = useState(props.sort);
  const [searching, setSearching] = useState("");
  const [sorting, setSorting] = useState("");
  const id = data.id;
  useEffect(
    () => {
      // pemanggilan reducer untuk menyimpan data user ke redux
      // dispatch({ type: "SET_ALL_DATA_USER", data: props.data })
      setData(props.data);
      setPage(Number(props.page));
      setSearch(props.search);
      setSort(props.sort);
    },
    props.data,
    props.page,
    props.search,
    props.sort
  );
  console.log(data);
  {
    /*Link--------------------------------------------------------------------*/
  }
  const handleSearch = (event) => {
    setSearching(event.target.value);
    router.push(`/transfer?search=${searching}`);
  };
  const handleSort = (event) => {
    setSorting(event.target.value);
    router.push(`/transfer?sort=${sorting}`);
  };
  const handleDetailUser = (id) => {
    router.push({ pathname: `/transfer/[id]`, query: { id: id } });
    console.log(id);
  };
  console.log(searching);
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

            <div className="row">
              <div className="col-9">
                <div className="input-group mb-3 ">
                  <div class="input-group-prepend">
                    <span
                      className="input-group-text searchBar"
                      id="basic-addon1"
                    >
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
                    onKeyPress={handleSearch}
                  />
                </div>
              </div>
              <div className="col-1">
                <select
                  name="select"
                  id=""
                  className="sorting"
                  onChange={handleSort}
                >
                  <option value=""> All Data</option>
                  <option value="firstName ASC">A-Z</option>
                  <option value="lastName ASC">Z-A</option>
                </select>
              </div>
            </div>

            {/* {user.data.map((item) => (
              <div key={item.id}>
                <TransferCard data={item} handleDetail={handleDetailUser} />
              </div>
            ))} */}
            {data.map((item) => (
              <div
                className="historyCard"
                key={item.id}
                onClick={() => handleDetailUser(item.id)}
              >
                <div className="historyCard__flex">
                  <div className="historyCard__flex1">
                    <img
                      src={
                        item.image
                          ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${item.image}`
                          : "/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                      }
                      alt="profile"
                      className="historyCard__profilePicture"
                    />
                  </div>
                  <div className="historyCard__flex2">
                    <p className="historyCard__profileName">
                      {item.firstName + " " + item.lastName}
                    </p>
                    <p>{item.noTelp}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="button__paginationAllign">
              <button
                className="button__pagination"
                onClick={() => {
                  router.push(
                    `/transfer?page=${
                      page - 1
                    }&search=${searching}&sort=${sorting}`
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
              <button
                className="button__pagination"
                onClick={() => {
                  router.push(
                    `/transfer?page=${
                      page + 1
                    }&search=${searching}&sort=${sorting}`
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
