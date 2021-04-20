import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

// change username,
function Password() {}

function UserName(props) {}

// change password.

//change address.

// Add user

function profile(props) {
  return (
    <>
      <Avatar alt="default avatar" src="/" />
      <input type="file" />
      <Button>Upload</Button>

      <TextField id="user-name" label="Choose Username" defaultValue="" />

      <Button> Change Username </Button>
      <TextField id="user-password" label="Choose Password" defaultValue="" />
      <Button>Change Password</Button>
      <TextField id="user-fullname" label="Full Name" defaultValue="" />
      <TextField id="user-street" label="Street Address" defaultValue="" />
      <TextField id="user-apt" label="Apt,suite" defaultValue="" />
      <TextField id="user-city" label="City" defaultValue="" />
      <TextField id="user-state" label="State" defaultValue="" />
      <TextField id="user-zip-code" type="number" label="Zip Code" defaultValue="" />
      <Button>Change Address</Button>
      
      <h3>Recent purchases</h3>
    {/* A change, delete later */}

      <h3>Recently Viewed</h3>

      <Button>Delete User</Button>
    </>
  );
}
// Delete User

//Credit Amount

// Recent Purchases

// Recently viewed

// Profile-Profile Picture with upload button,

export default profile;
