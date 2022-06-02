import React, { useState } from "react";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import Footer from "../../components/footer";
import HistoryCard from "../../components/historyCard";
import axiosServer from "../../utils/axiosServer";
import axios from "../../utils/axios";
import cookies from "next-cookies";
import { useRouter } from "next/router";
import { Line } from "react-chartjs-2";
import chart from "chart.js/auto";

export async function getServerSideProps(context) {
  try {
    const dataCookies = cookies(context);
    const params = context.query;
    const page = !params?.page ? 1 : params.page;
    const result = await axiosServer.get(
      `/transaction/history?page=1&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    const resultUserId = await axiosServer.get(
      `/user/profile/${dataCookies.userId}  `,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    const resultDashboard = await axiosServer.get(
      `/dashboard/${dataCookies.userId}  `,
      {
        headers: {
          Authorization: `Bearer ${dataCookies.token}`,
        },
      }
    );
    return {
      props: {
        data: result.data.data,
        dashboard: resultDashboard.data.data,
        user: resultUserId.data.data,
        page: page,
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

export default function Home(props) {
  //   console.log(props.data);
  const router = useRouter();
  const [data, setData] = useState(props.data);
  const [dataUser, setDataUser] = useState(props.user);
  const [dashboard, setDashboard] = useState(props.dashboard);
  const income =
    dashboard.listIncome[0].total +
    dashboard.listIncome[1].total +
    dashboard.listIncome[2].total +
    dashboard.listIncome[3].total +
    dashboard.listIncome[4].total +
    dashboard.listIncome[5].total +
    dashboard.listIncome[6].total;
  const expense =
    dashboard.listExpense[0].total +
    dashboard.listExpense[1].total +
    dashboard.listExpense[2].total +
    dashboard.listExpense[3].total +
    dashboard.listExpense[4].total +
    dashboard.listExpense[5].total +
    dashboard.listExpense[6].total;
  const handleTransfer = () => {
    router.push("/transfer");
  };
  const handleHistory = () => {
    router.push("/dashboard/history");
  };
  {
    /*handle Chart--------------------------------------------*/
  }
  const datas = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Income",
        fill: false,
        backgroundColor: "#1EC15F",
        borderColor: "#1EC15F",
        data: [
          dashboard.listIncome[0].total,
          dashboard.listIncome[1].total,
          dashboard.listIncome[2].total,
          dashboard.listIncome[3].total,
          dashboard.listIncome[4].total,
          dashboard.listIncome[5].total,
          dashboard.listIncome[6].total,
        ],
        // yAxisID: "y-axis-1",
      },
      {
        label: "Expense",
        fill: false,
        backgroundColor: "#FF5B37",
        borderColor: "#FF5B37",
        data: [
          dashboard.listExpense[0].total,
          dashboard.listExpense[1].total,
          dashboard.listExpense[2].total,
          dashboard.listExpense[3].total,
          dashboard.listExpense[4].total,
          dashboard.listExpense[5].total,
          dashboard.listExpense[6].total,
        ],
        // yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxis: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>

          <div className="col-9">
            <div className="dashboardPage">
              <div className=" dashboardPage__info row">
                <div className="col-9">
                  <p>Balance</p>
                  <h1>Rp{dataUser.balance}</h1>
                  <p>{dataUser.noTelp}</p>
                </div>
                <div className=" col-3 dashboardPage__info__button">
                  <button className="buttonTransfer" onClick={handleTransfer}>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    Transfer
                  </button>
                  <button className="buttonTopUp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    Top Up
                  </button>
                </div>
              </div>
              <div className=" status row">
                <div className="col-7">
                  <div className="dashboardPage__info__historyBar">
                    <div className="row">
                      <div className="col-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="green"
                          className="bi bi-arrow-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                          />
                        </svg>
                        <p> Income</p>
                        <h4 className="dashboardPage__info__historyBar__price">
                          Rp{income}
                        </h4>
                      </div>
                      <div className="col-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="red"
                          className="bi bi-arrow-up"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                          />
                        </svg>

                        <p> Expense</p>
                        <h4 className="dashboardPage__info__historyBar__price">
                          Rp{expense}
                        </h4>
                      </div>
                    </div>
                    <div>
                      <hr />
                      <Line data={datas} options={options} />
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="dashboardPage__info__historyStatus">
                    <div className="row">
                      <div className="col-8">
                        <h6 className="dashboardPage__info__historyStatusHeader ">
                          Transaction History
                        </h6>
                      </div>
                      <div className="col-4">
                        <h6
                          className="dashboardPage__info__historyStatus__viewAll"
                          onClick={handleHistory}
                        >
                          View All
                        </h6>
                      </div>
                    </div>
                    <div className="history__scroll">
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
                                <p className="historyCard__status">
                                  +{item.amount}
                                </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="status__responsive">
              <h6 className="dashboardPage__info__historyStatus__viewAll">
                View All
              </h6>
              <div className="dashboardPage__info__historyBar">
                <div className="row">
                  <div className="col-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="green"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>
                    <p> Income</p>
                    <h4 className="dashboardPage__info__historyBar__price">
                      Rp1.560.000
                    </h4>
                  </div>
                  <div className="col-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="red"
                      className="bi bi-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>

                    <p> Expense</p>
                    <h4 className="dashboardPage__info__historyBar__price">
                      Rp2.120.000
                    </h4>
                  </div>
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
