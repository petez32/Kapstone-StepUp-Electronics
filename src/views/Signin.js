import React, { useState } from "react";
import "../asset/signin.css";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Signin() {
    const [userInput, setUserInput] = useState({ username: "", password: "" });
    const handleInput = (e) => {
        setUserInput(state => ({...state, [e.target.name]: e.target.value}));
    }
    const handleSubmit = () => {
        if (userInput.password.length < 6) {
            console.log('password should be longer than 6 characters')
        } else {
            console.log({username:userInput.username, password:userInput.password})
        }
    }
    return (
        <div id="signin-div">
            <form id="signin-form">
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
                <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
                <span>
                    Not a member <Link to="/signup">Sign Up</Link> for X amount of credits.
                </span>
            </form>
        </div>
    );
}

export default Signin;
