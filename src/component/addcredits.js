import React, { useState, useEffect } from "react";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import "../asset/addcredits.css";

const AddCredits = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [credits, setCredits] = useState(0);
  const user = useStore((state) => state.user);
  const [balance, setBalance] = useState(user.credits);

  const handlOnChange = (event) => {
    if ((event.target.id = "credits")) {
      setCredits(event.target.value);
    }
  };
  const handleSubmit = () => {
    fetch("https://step-up-electronics.glitch.me/updateCredits/" + user.id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        credits: balance,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  useEffect(() => {
    setTotalCost(credits * 2);
    setBalance(Number(credits) + Number(user.credits));
  }, [credits, user]);

  return (
    <>
      <div>
        <h2 className="addCreditsHeader">Add Credits</h2>
        <div>
          {" "}
          <strong>Note:</strong> Each credit costs $2{" "}
        </div>
        <div>
          <strong>Total Amount To Be Charged: $</strong>
          {totalCost}{" "}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="creditAmount">
            <label>Credit Amount</label>
            <input type="text" id="credits" onChange={handlOnChange}></input>
          </div>
          <div className="ccNumber">
            <label>Credit Card Number</label>
            <input type="text" id="Card"></input>
          </div>
          <div className="expirationDate">
            <label>Expiration Date</label>
            <input type="text" id="date"></input>
          </div>
          <div className="securityCode">
            <label>Security Code</label>
            <input type="text" id="code"></input>
          </div>
          <div>
            <Link to="/ShoppingCart">
              <button
                className="addCreditsButton"
                onClick={handleSubmit}
                type="submit"
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCredits;
