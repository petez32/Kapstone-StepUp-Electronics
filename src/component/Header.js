import React, { useEffect, useState } from "react";
import "../asset/Header.css";
import Logo from "../asset/StepUp_Electronics.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Signin from "../component/Signin";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import DropDown from "../component/AllProductsDropDown.js";

function Header() {
  const user = useStore((state) => state.user);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user.loaded === true) {
      fetch("http://localhost:5000/cart/get/" + user.id)
        .then((res) => res.json())
        .then((data) => setCart(data));
    }
  }, [user, cart]);

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

        <DropDown />
        {user.token && (
          <Link to="/Profile">
            <div className="headerProfile">
              {user.token && <div>{user.username}</div>}
            </div>
          </Link>
        )}
        {!user.token && (
          <Link to="/Signin">
            <div className="headerSignin">Sign-In</div>
          </Link>
        )}
        {!user.token && (
          <Link to="/Signup">
            <div className="headerSignup">Sign-Up</div>
          </Link>
        )}
        <div>
          <Link to="/Profile">
            {user.token && <div className="headerUser">{user.userName}</div>}
          </Link>
        </div>
        <div className="headerCart">
          <Link to="/ShoppingCart">
            <ShoppingCartIcon fontSize="large" />
          </Link>

          <span className="headerCartCount">{cart.length}</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
