import React, { useEffect, useState } from "react";
import "../asset/Header.css";
import Logo from "../asset/StepUp_Electronics.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import DropDown from "../component/AllProductsDropDown.js";

function Header() {
  const user = useStore((state) => state.user);
  const [cart, setCart] = useState([]);
  const logout = () => {
    window.location = "/";
  };

  useEffect(() => {
    if (user.loaded === true) {
      fetch("https://step-up-electronics.glitch.me/cart/get/" + user.id)
        .then((res) => res.json())
        .then((data) => setCart(data));
    }
  }, [user, cart]);

  return (
    <div className="header">
      <img className="headerLogo" src={Logo} alt="company logo" />

      {/* <div className="headerSearch">
        <input className="headerSearchInput" type="text" />

        <SearchIcon className="headerSearchIcon" />
      </div> */}
      <div className="headerNavbar">
        <Link to="/">
          <div className="headerHome">Home</div>
        </Link>

        <DropDown />
        {/* <Link to="/Profile">
          <div className="headerProfile">Profile</div>
        </Link> */}
        {!user.token && (
          <Link to="/Signin">
            <div className="headerSignin">Sign-In</div>
          </Link>
        )}
        <Link to="/Profile">
          {user.token && <div className="headerUser">{user.userName}</div>}
        </Link>
        {!user.token && (
          <Link to="/Signup">
            <div className="headerSignup">Sign-Up</div>
          </Link>
        )}
        {user.token && (
          <div className="headerCart">
            <>
              <Link to="/ShoppingCart">
                <ShoppingCartIcon fontSize="large" />
              </Link>
              <span className="headerCartCount">{cart.length}</span>

              <div>
                <Link to="/">
                  <button className="logoutButton" onClick={logout}>
                    Logout{" "}
                  </button>
                </Link>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
