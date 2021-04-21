import React,{useState, useEffect} from 'react'
import {useStore} from "../store/store"
import {Link,Route} from "react-router-dom"
import AddCredits from './addcredits'

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
      <div className="availiableBackground">
        <div className="availiableContainer">
          <div className="availiableCredit">
            Available Credit:
            <strong> {currentUser.credits} Credits</strong>
          </div>
          <div className="noItems">You have no items in the cart</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cartBackground">
        <center>
          <div className="shoppingCartContainer">
            <h5 className="cartCredits">Availabe Credits:</h5>{" "}
            <strong>{currentUser.credits}</strong>{" "}
            <button className="cartAddCreditsButton">Add Credits</button>
            <div>
              {" "}
              <th>
                <h5>Product Name</h5>
              </th>
              <th>
                <h5> Price</h5>
              </th>
              <div>
                {cart &&
                  cart.map((item) => {
                    {
                      sum = sum + item.price;
                    }
                    return (
                      <tr>
                        <td>{item.productName}</td>
                        <td>{item.price} credits</td>
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
                    <strong>{sum} credits</strong>{" "}
                  </td>
                </tr>

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
            </div>
             
        </div>
        <p></p><p></p>
        <div>
        <Route path="/ShoppingCart/addCredits" component={AddCredits} />
        </div>
        </>
    )
        }
}

export default MyCart;
