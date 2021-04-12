import React from "react";
import "../asset/Header.css";
import Logo from "../asset/StepUp_Electronics.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import DropDown from "../component/AllProductsDropDown.js";

function Header() {
  return (
    <div className="header">
      <img className="headerLogo" src={Logo} alt="company logo" />
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNavbar">
        <Link to="/">
          <div className="headerHome">Home</div>
        </Link>

        {/* <Link to="/AllProduct">
          <div className="headerProducts">Products</div>
        </Link> */}
        <DropDown />

        <Link to="/Profile">
          <div className="headerProfile">Profile</div>
        </Link>

        <Link to="/Signin">
          <div className="headerSignin">Sign-In</div>
        </Link>

        <Link to="/Signup">
          <div className="headerSignup">Sign-Up</div>
        </Link>

        <div className="headerCart">
          <Link to="/ShoppingCart">
            <ShoppingCartIcon fontSize="large" />
          </Link>
          <span className="headerCartCount">0</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
