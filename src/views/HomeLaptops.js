import React, { useState, useEffect } from "react";
import { All_Products, addToCart } from "../FetchRequests";
import { useStore } from "../store/store";
import "../asset/HomeLaptops.css";

function Laptop() {
  const [products, setProducts] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const user = useStore((state) => state.user);
  const addItemToCart = (event) => {
    const productId = event.target.id;
    const itemToAdd = products.filter((product) => {
      return product._id === productId;
    });
    const item = itemToAdd[0];

    const productName = item.productName;
    const price = item.price;
    const productDetail = item.productDetail;
    const userId = user.id;
    addToCart(userId, productName, price, productDetail).then((res) =>
      console.log(res)
    );
  };

  useEffect(() => {
    All_Products().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const laptopsCategory =
      products &&
      products.filter((products) => {
        return products.category === "laptop";
      });
    setLaptops(laptopsCategory);
  }, [products]);
  return (
    <div className="allContainer">
      <div className="individualLaptopContainers">
        {laptops &&
          laptops.slice(0, 4).map((item) => (
            <div className="individualProduct">
              <center>
                <img className="productImage" src={item.imageUrl} alt="" />
                <h4 className="productHeader"> {item.productName} </h4>
                <p className="productParagraph"> {item.productDetail} </p>
                <h5 className="productPrice"> {item.price} </h5>
                {user.token && (
                  <div>
                    {" "}
                    <button
                      className="productButton"
                      onClick={addItemToCart}
                      id={item._id}
                    >
                      Add To Cart
                    </button>
                  </div>
                )}
              </center>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Laptop;
