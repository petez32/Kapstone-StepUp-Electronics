import React from "react";

// Profile-Profile Picture with upload button,
// change username,
// change password, change address.

function profile(props) {
  return (
    <div>
      <img src="" alt="profile" />
      <input type="file" />
      <label>Username</label>
      <input name="username" />
      <label>Password</label>
      <input name="password" />
      <label>Address</label>
      <input name="address" />
      <button>Upload</button>
    </div>
  );
}

export default profile;
