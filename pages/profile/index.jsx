import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserById,
  updateImageUser,
  updateProfileUser,
  deleteImage,
} from "../../stores/action/user";
import Nav from "../../components/nav";
import SideNav from "../../components/sideNav";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
export default function Profile() {
  // const id = window.localStorage.getItem("userId");
  const dispatch = useDispatch();
  const router = useRouter();
  const [users, setUser] = useState("");
  const [name, setName] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });
  const [imageForm, setImageForm] = useState({ image: null });
  const [uiImage, setUiImage] = useState(null);
  useEffect(() => {
    getdataUserId();
  }, []);
  const user = useSelector((state) => state.user);
  const getdataUserId = async () => {
    try {
      const dataUser = await dispatch(getUserById(Cookies.get("userId")));
      setUser(dataUser.action.payload.data.data);
      console.log(dataUser);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleName = () => {
    setName(true);
  };
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleUpdateName = async (e) => {
    try {
      e.preventDefault();
      const resultName = await dispatch(
        updateProfileUser(Cookies.get("userId"), form)
      );

      // console.log((await resultRegister.payload).data.data.id);
      setMessage(resultName.action.payload.data.msg);

      setError(false);
      setName(false);
      console.log(resultName);
    } catch (error) {
      console.log(error.response);
      setError(true);
      setMessage(error.response);
    }
  };
  const handleChangeImage = (event) => {
    const { name, files } = event.target;
    setImageForm({ [name]: files[0] });
    setUiImage(URL.createObjectURL(files[0]));
    // await dispatch(updateProfileUser(Cookies.get("userId"),))
  };
  const handleSubmitImage = async (e) => {
    try {
      e.preventDefault();
      const formSend = {
        image: imageForm.image,
      };
      const formData = new FormData();
      for (const data in formSend) {
        formData.append(data, formSend[data]);
      }
      for (const data of formData.entries()) {
        console.log(data[0] + ", " + data[1]);
      }
      const update = await dispatch(
        updateImageUser(Cookies.get("userId"), formData)
      );
      console.log(update);
      alert("Success Change Profile");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteImage = async () => {
    try {
      const deletes = await dispatch(deleteImage(Cookies.get("userId")));
      console.log(deletes);
      alert("succes delete Image");
    } catch (error) {
      console.log(error);
      setError(error.response);
    }
  };
  {
    /*Link------------------------------------------------------------------------------------------*/
  }
  console.log(users.firstName);
  const handlePersonalInformation = () => {
    router.push("/profile/personalInformation");
  };
  const handleChangePassword = () => {
    router.push("/profile/changePasword");
  };
  const handleChangePin = () => {
    router.push("/profile/changePin");
  };
  const handleLogOut = () => {
    router.push("/login");
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideNav />
          </div>
          <div className="col-9 profile__border">
            <img
              src={
                users.image
                  ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${users.image}`
                  : "/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
              }
              alt="profileImage "
              className="profile__image"
              name="image"
            />

            <button className="profile__edit" onClick={handleName}>
              edit
            </button>
            {name ? (
              <div>
                <div>
                  <h6>Edit image</h6>
                  <input
                    type="file"
                    id="userFiles"
                    name="image"
                    onChange={handleChangeImage}
                  />
                  <button onClick={handleSubmitImage}>Update Image </button>
                  <button onClick={handleDeleteImage}>Delete Image </button>
                </div>
                <div>
                  <h6>Edit Profile</h6>
                  <input
                    type="text"
                    placeholder="add First Name"
                    name="firstName"
                    onChange={handleChangeForm}
                  />
                  <input
                    type="text"
                    placeholder="add Last Name"
                    name="lastName"
                    onChange={handleChangeForm}
                  />
                </div>
                {!isError ? (
                  <h6 className="succesMessage">{message}</h6>
                ) : (
                  <h6 className="errorMessage">{message}</h6>
                )}
                <button onClick={handleUpdateName}>Update</button>
              </div>
            ) : (
              <h5>{users.firstName + " " + users.lastName}</h5>
            )}

            <p>{users.noTelp}</p>
            <div
              className="profile__option"
              onClick={handlePersonalInformation}
            >
              <div className="row">
                <div className="col-8">
                  <p className="profile__option__page">Personal Information</p>
                </div>
                <div className="col-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="profile__option" onClick={handleChangePassword}>
              <div className="row">
                <div className="col-8">
                  <p className="profile__option__page">Change Password</p>
                </div>
                <div className="col-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="profile__option" onClick={handleChangePin}>
              <div className="row">
                <div className="col-8">
                  <p className="profile__option__page">Change Pin</p>
                </div>
                <div className="col-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="profile__option" onClick={handleLogOut}>
              <div className="row">
                <div className="col-8">
                  <p className="profile__option__page">Log Out</p>
                </div>
                <div className="col-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
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
