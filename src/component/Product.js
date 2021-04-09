import React from "react";
import "../asset/Product.css";
import Computer from "../asset/computer.jpg";

function Product() {
  return (
    <div className="product">
      <img src={Computer} alt="Computer" />
      <p className="productPrice">
        <strong>$100.00</strong>
      </p>
      <div className="productInfo">
        <p>
          <strong>
            Brand New Computer, 8GB of ram, 500GB SSD, i7 processor, includes
            mouse and keyboard
          </strong>
        </p>
      </div>
      <button>Add To Cart</button>
    </div>
  );
}
export default Product;
