import React from "react";
import "../asset/Header.css";
import Logo from "../asset/StepUp_Electronics.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img className="headerLogo" src={Logo} alt="company logo" />
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNavbar">
        <div className="headerHome">Home</div>
        <div className="headerProducts">Products</div>
        <div className="headerProfile">Profile</div>
        <div className="headerSignin">Sign-in</div>
        <div className="headerSignup">Sign-up</div>
        <div className="headerCart">
          <ShoppingCartIcon fontSize="large" />
          <span className="headerCartCount">0</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
