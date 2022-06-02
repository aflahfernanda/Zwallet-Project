import React, { useState, useEffect } from "react";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import Footer from "../../components/footer";
import axiosServer from "../../utils/axiosServer";
import cookies from "next-cookies";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Pagination } from "react-paginate";
export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const limit = 4;
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const filter = !params?.filter ? "" : params.filter;
    const result = await axiosServer.get(
      `/transaction/history?page=${page}&limit=${limit}&filter=${filter}`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    return {
      props: {
        data: result.data.data,
        page: page,
        filter: filter,
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
export default function History(props) {
  const router = useRouter();

  const [data, setData] = useState(props.data);
  const [page, setPage] = useState(Number(props.page));
  const [filter, setFilter] = useState(props.filter);
  const [sort, setSort] = useState("");
  useEffect(
    () => {
      // pemanggilan reducer untuk menyimpan data user ke redux
      // dispatch({ type: "SET_ALL_DATA_USER", data: props.data })
      setData(props.data);
      setPage(Number(props.page));
      setSort(props.filter);
    },
    props.data,
    props.page,
    props.filter
  );
  const handleFilter = (event) => {
    setSort(event.target.value);
  };
  // const handleStatus=()=>{
  //   if()
  // }
  console.log(filter);
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>
          <div className="col-9">
            <div>
              <div className="row">
                <div className="col-9">
                  <h4>Transaction History</h4>
                </div>
                <div className="col-2">
                  <select
                    name="chooseSort"
                    onChange={handleFilter}
                    className="sorting"
                  >
                    <option value="ALL DATA">ALL DATA</option>
                    <option value="WEEK">WEEK</option>
                    <option value="MONTH">MONTH</option>
                    <option value="MONTH">YEAR</option>
                  </select>
                </div>
              </div>
              <div className="dashboardPage__transactionHistorys">
                {data.map((item) => (
                  <div className="historyCard" key={item.id}>
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
                        <p>{item.status}</p>
                      </div>
                      <div className="historyCard__flex3">
                        {item.type === "topup" ? (
                          <p className="historyCard__status">+{item.amount}</p>
                        ) : (
                          <p
                            className="historyCard__status"
                            style={{ color: "red" }}
                          >
                            -{item.amount}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="button__paginationAllign">
                  <button
                    className="button__pagination"
                    onClick={() => {
                      router.push(
                        `/dashboard/history?page=${page - 1}&filter=${sort}`
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
                        `/dashboard/history?page=${page + 1}&filter=${sort}`
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
