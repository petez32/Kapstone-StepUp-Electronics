import "../asset/signup.css";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStore, actions } from "../store/store";

function Signup() {
  const dispatch = useStore((state) => state.dispatch);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastname: "",
  });
  const handleSubmit = () => {
    if (
      userInput.password.length === 0 ||
      userInput.username.length === 0 ||
      userInput.email.length === 0 ||
      userInput.firstName.length === 0 ||
      userInput.lastName.length === 0
    ) {
      dispatch({
        type: actions.TOAST,
        payload: { message: "All fields must be completed", statusCode: 400 },
      });
    } else if (userInput.password.length < 6) {
      dispatch({
        type: actions.TOAST,
        payload: {
          message: "password should be longer than 6 characters",
          statusCode: 400,
        },
      });
    } else {
      console.log(userInput);
      dispatch({
        type: actions.TOAST,
        payload: { message: "Created account successfully", statusCode: 201 },
      });
    }
  };

  const handleInput = (e) => {
    setUserInput((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  return (
    <div id="signup-div">
      <form id="signup-form">
        <div className="signupText">
          <h1>Sign-Up</h1>
        </div>
        <br />
        <TextField
          name="username"
          onChange={handleInput}
          id="username-input"
          label="Username"
          variant="filled"
        />
        <TextField
          name="password"
          onChange={handleInput}
          id="password-input"
          label="Password"
          variant="filled"
          type="password"
        />
        <TextField
          name="email"
          onChange={handleInput}
          id="email-input"
          label="Email"
          variant="filled"
        />
        <TextField
          name="firstName"
          onChange={handleInput}
          id="first-name-input"
          label="First Name"
          variant="filled"
        />
        <TextField
          name="lastName"
          onChange={handleInput}
          id="last-name-input"
          label="Last Name"
          variant="filled"
        />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
        <span>
          <center>
            Already a member? <Link to="/signin">Sign In</Link>
          </center>
        </span>
      </form>
    </div>
  );
}

export default Signup;
