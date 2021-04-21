import "../asset/signup.css";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { signUpRequest } from "../FetchRequests";
import { useStore, actions } from "../store/store";
import { toast } from "react-toastify"

function Signup() {
  const dispatch = useStore((state) => state.dispatch);
  const history = useHistory();
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      userInput.password.length === 0 ||
      userInput.username.length === 0 ||
      userInput.email.length === 0 ||
      userInput.firstName.length === 0 ||
      userInput.lastName.length === 0
    ){
      toast.error("All fields must be completed")
    }else if (userInput.password.length < 4) {
      toast.error("password should be longer than 3 characters")
    }else{
      signUpRequest(userInput.username, userInput.password, userInput.email,
        userInput.firstName, userInput.lastName)
        toast.success('Created account successfully')
      history.push("/signin")}
        }
  const handleInput = (e) => {
    setUserInput((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  return (
    <div id="signup-div">
      <form onSubmit={handleSubmit}id="signup-form">
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
<<<<<<< HEAD
        <Link to="/signin">
          <center>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </center>
=======
        <Link to="/signin" >
        <Button type="Submit" onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
>>>>>>> main
        </Link>
        <span>
          <center>
            Already a member? <Link to="/signin">Sign In</Link>
          </center>
        </span>
      </form>
    </div>
  )};

export default Signup;
