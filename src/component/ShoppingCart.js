import React, { useState, useEffect } from "react";
import { useStore } from "../store/store";
import { Link, Route } from "react-router-dom";
import AddCredits from "./addcredits";
import "../asset/ShoppingCart.css";

const MyCart = () => {
  const user = useStore((state) => state.user);
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  let sum = 0;
  // const[checkedOut, setCheckedOut] = useState(false)
  // const[link, setLink] = useState("")

  // delete from cart
  const DeleteItemFromCart = (event) => {
    const id = event.target.id;
    fetch("http://localhost:5000/cart/delete/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
  };
  // checkout
  const CheckOut = (event) => {
    if (currentUser.credits < sum) {
      alert("you dont have enough credits please add more credits");
      event.preventDefault();

      return false;
    } else {
      const userId = event.target.id;
      fetch("http://localhost:5000/cart/checkout/" + userId, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((res) => console.log(res));
      const balance = currentUser.credits - sum;
      // update credit
      fetch("http://localhost:5000/updateCredits/" + userId, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          credits: balance,
        }),
      })
        .then((response) => response.json())
        .then((response) => console.log(response));
    }
  };

  useEffect(() => {
    if (user.loaded === true) {
      fetch("http://localhost:5000/cart/get/" + user.id)
        .then((res) => res.json())
        .then((data) => setCart(data));
      fetch("http://localhost:5000/user/" + user.id)
        .then((res) => res.json())
        .then((data) => setCurrentUser(data));
    }
  }, [user, cart]);
  // useEffect(()=>{
  //     DeleteItemFromCart()

  // },[cart])
  if (cart.length === 0) {
    return (
      <div className="availableBackground">
        <center>
          <div className="availableContainer">
            <div className="availableCredit">
              Available Credit: <strong>{currentUser.credits}</strong>
            </div>
            {/* <div className="addCreditLink">
              <Link to="/ShoppingCart/addCredits">Click to Add Credits</Link>
            </div> */}
            <div className="noItems">You have no items in the cart</div>
            <Route path="/ShoppingCart/addCredits" component={AddCredits} />
          </div>
        </center>
      </div>
    );
  } else {
    return (
      <div className="cartBackground">
        <center>
          <div className="shoppingCartContainer">
            <h4 className="cartCredits">Available Credits:</h4>{" "}
            <strong>{currentUser.credits}</strong>{" "}
            <div className="clickAddCreditsButton">
              <Link
                to="ShoppingCart/addCredits"
                className="clickAddCreditsButton"
              >
                Click Here To Add Credits
              </Link>
            </div>
            {/* swapped button for link */}
            <div className="tdContainers">
              <tr>
                <td>
                  <h4> Product Name</h4>
                </td>
                <td>
                  <h4>Price</h4>
                </td>
              </tr>
              {cart &&
                cart.map((item) => {
                  {
                    sum = sum + item.price;
                  }
                  return (
                    <tr>
                      <td>{item.productName}</td>
                      <td>{item.price} Credits</td>
                      <td>
                        <button
                          className="cartDeleteButton"
                          onClick={DeleteItemFromCart}
                          id={item._id}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>{sum} Credits</strong>{" "}
                </td>
              </tr>

              {/* <div> */}
              <Link to="/cart/checkout">
                <button
                  className="checkoutButton"
                  onClick={CheckOut}
                  id={user.id}
                >
                  Click To CheckOut
                </button>
              </Link>

              {/* {!checkedOut && <Link  to ="/ShoppingCart" ><button onClick= {CheckOut} id = {user.id}>Click To CheckOut</button></Link> } */}
            </div>
            <div>
              <Route path="/ShoppingCart/addCredits" component={AddCredits} />
            </div>
          </div>
        </center>
      </div>
    );
  }
};

export default MyCart;
