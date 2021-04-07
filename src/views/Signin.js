import React, { useState } from "react";
import "../asset/signin.css";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Signin() {
    const [userInput, setUserInput] = useState({ userName: "", passWord: "" });
    const handleInput = (e) => {
        console.log(e.target.name, e.target.value)
        if (e.target.name === 'passWord' && e.target.value.length < 6) {
            console.log('password should be longer than 6 characters')
        } else {
            setUserInput(state => ({...state, [e.target.name]: e.target.value}));
        }
    }
    return (
        <div id="signin-div">
            <form id="signin-form">
                <TextField
                    name="userName"
                    onChange={handleInput}
                    label="UserName"
                    variant="filled"
                />
                <TextField
                    onChange={handleInput}
                    label="Password"
                    name="passWord"
                    variant="filled"
                    type="password"
                />
                <Button variant="contained" color="primary">Submit</Button>
                <span>
                    Not a member <Link to="/signup">Sign Up</Link> for X amount of credits.
                </span>
            </form>
        </div>
    );
}

export default Signin;
