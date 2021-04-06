import React from "react";
import "../asset/signin.css";
import { TextField, Button } from "@material-ui/core";

function Signin() {
return (
    <div id="signin-div">
    <form id="signin-form">
        <TextField id="filled-basic" label="UserName" variant="filled" />
        <TextField
        id="filled-basic"
        label="Password"
        variant="filled"
        type="password"
        />
        <Button variant="contained" color="primary">
            Submit
		</Button>
    </form>
    </div>
);
}

export default Signin;
