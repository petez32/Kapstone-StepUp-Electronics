import React from "react";
import { Link } from "react-router-dom";
import "../asset/CheckOut.css";

const CheckOut = () => {
  return (
    <div className="checkoutBackground">
      <div className="checkoutContainer">
        <center>
          <h4 className="checkoutThankYou">
            Thank You for shopping with us
            <Link to="/user/order"> check your order</Link>
          </h4>
        </center>
      </div>
    </div>
  );
};

export default CheckOut;
