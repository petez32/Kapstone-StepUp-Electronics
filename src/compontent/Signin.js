import React from "react";
import "../asset/Signin.css";
import { TextField } from "@material-ui/core";
function Signin() {
  return (
    <div id="signin-div">
      <form id="login-form">
        <TextField id="filled-basic" label="UserName" variant="filled" />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          type="password"
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Signin;
