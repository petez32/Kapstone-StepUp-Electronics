import React, { useState } from "react";
import "../asset/signin.css";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { signInRequest } from "../FetchRequests";
import { useStore, actions } from "../store/store";

function Signin() {
  const dispatch = useStore((state) => state.dispatch);
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  const handleInput = (e) => {
    setUserInput((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    if (userInput.password.length === 0 || userInput.username.length === 0) {
      dispatch({
        type: actions.TOAST,
        payload: { message: "All fields must be completed", statusCode: 400 },
      });
    } else if (userInput.password.length < 4) {
      dispatch({
        type: actions.TOAST,
        payload: {
          message: "password should be longer than 3 characters",
          statusCode: 400,
        },
      });
    } else {
      console.log({
        username: userInput.username,
        password: userInput.password,
      });
      dispatch({
        type: actions.TOAST,
        payload: { message: " Successfully logged in", statusCode: 201 },
      });
      signInRequest(userInput.username, userInput.password).then((userData) =>
        dispatch({ type: actions.LOGIN, payload: userData })
      );
    }
  };
  return (
    <div id="signin-div">
      <form id="signin-form">
        <div className="loginText">
          <h1>Sign-In</h1>
        </div>
        <br />
        <TextField
          name="username"
          onChange={handleInput}
          label="UserName"
          variant="filled"
        />
        <TextField
          onChange={handleInput}
          label="Password"
          name="password"
          variant="filled"
          type="password"
        />
        <Link to="/">
          <center>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </center>
        </Link>
        <span>
          {" "}
          <center>
            Not a member <Link to="/signup">Sign Up</Link> for 50 bonus credits.
          </center>
        </span>
      </form>
    </div>
  );
}

export default Signin;
