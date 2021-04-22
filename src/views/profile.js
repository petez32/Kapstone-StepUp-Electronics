import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import EditProfile from "../component/EditProfile";
import { useStore } from "../store/store";
import "../asset/profile.css";

const Profile = () => {
  // call the user from the database
  const user = useStore((state) => state.user);
  const [currentUser, setCurrentUser] = useState({});
  //use effect

  useEffect(() => {
    if (user.loaded === true) {
      fetch("http://localhost:5000/user/" + user.id, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((response) => setCurrentUser(response));
    }
  }, [user, currentUser]);
  return (
    <div className="profileBackground">
      <div className="profileContainer">
        <center>
          <div className="profileHeader">
            <h1>{currentUser && currentUser.userName}'s Profile </h1>
            <h3>Credit Balance: {currentUser.credits}</h3>

            <div className="profileName">
              {" "}
              Name:
              <span>
                {currentUser.firstName} {currentUser.lastName}
              </span>{" "}
            </div>
            <div className="profileUsername">
              {" "}
              Username:
              <span>{currentUser.userName} </span>{" "}
            </div>
            <div className="profileEmail">
              {" "}
              Email:
              <span>{currentUser.email} </span>{" "}
            </div>
          </div>
          <div className="profileEditViewLink">
            Click To
            <Link to="/Profile/edit">
              <strong> Edit Profile </strong>
            </Link>{" "}
            or{" "}
            <Link to="/user/order">
              <strong> View Your Order</strong>
            </Link>
          </div>
        </center>
        <div>
          <Route path="/Profile/Edit" component={EditProfile} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
