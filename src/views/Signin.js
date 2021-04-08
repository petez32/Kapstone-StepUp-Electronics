import React, { useState } from "react";
import "../asset/signin.css";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {useStore, actions} from '../store/store'

function Signin() {
    const dispatch = useStore((state) => state.dispatch);
    const [userInput, setUserInput] = useState({ username: "", password: "" });
    const handleInput = (e) => {
        setUserInput(state => ({...state, [e.target.name]: e.target.value}));
    }
    const handleSubmit = () => {
        if (userInput.password.length === 0 || userInput.username.length === 0) {
			dispatch({ type: actions.TOAST, payload: { message: 'All fields must be completed', statusCode: 400 } });
		} else if (userInput.password.length < 6) {
			dispatch({ type: actions.TOAST, payload: { message: 'password should be longer than 6 characters', statusCode: 400 } });

		} else {
            console.log({username:userInput.username, password:userInput.password})
			console.log(userInput)
			dispatch({ type: actions.TOAST, payload: { message: ' Successfully logged in', statusCode: 201 } });
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
