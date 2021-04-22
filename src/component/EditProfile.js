import React, { useState, useEffect } from "react";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import "../asset/EditProfile.css";

const EditProfile = () => {
  // et current user
  const user = useStore((state) => state.user);
  const [submitted, setSubmitted] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  let [userInput, setUserInput] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    if (userInput.userName === "") {
      userInput.userName = user.userName;
    }
    if (userInput.firstName === "") {
      userInput.firstName = user.firstName;
    }
    if (userInput.lastName === "") {
      userInput.lastName = user.lastName;
    }
    if (userInput.email === "") {
      userInput.email = user.email;
    }

    setSubmitted(true);
    fetch("http://localhost:5000/update/user/" + user.id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: userInput.userName,
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        email: userInput.email,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };
  useEffect(() => {
    if (user.loaded === true) {
      fetch("http://localhost:5000/user/" + user.id, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((response) => setCurrentUser(response));
    }
  }, [currentUser, user]);

  useEffect(() => {
    if (submitted === true) {
      setUserInput({
        firstName: userInput.userName,
        lastName: userInput.userName,
        email: userInput.userName,
      });
    }
  }, [userInput, user]);

  return (
    <>
      <div className="editProfile">
        <h3 className="editProfileHeader">Edit Profile</h3>
        <form onSubmit={handleSubmit}>
          <div className="editFirstName">
            {" "}
            <strong>First Name: </strong>{" "}
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              placeholder={currentUser.firstName}
            />
          </div>
          <div className="editLastName">
            {" "}
            <strong>last Name: </strong>{" "}
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              placeholder={currentUser.lastName}
            />
          </div>
          <div className="editEmail">
            {" "}
            <strong>Email:</strong>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder={currentUser.email}
            />
          </div>
          <div>
            <Link to="/Profile">
              <button
                className="submitButtonChange"
                onClick={handleSubmit}
                type="submit"
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
