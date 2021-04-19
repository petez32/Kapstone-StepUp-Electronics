import React, { useState, useEffect } from "react";
import { All_Products } from "../FetchRequests";
function Laptop() {
  const [products, setProducts] = useState([]);
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    All_Products().then((data) => setProducts(data));

    const laptopsCategory = products.filter((products) => {
      return products.category === "laptop";
    });
    setLaptops(laptopsCategory);
  }, [laptops, products]);
  return (
    <div>
      {laptops.map((item) => (
        <div>
          <img src={item.imageUrl} alt="" />
          <>
            <h1> {item.productName} </h1>
            <p> {item.productDetail} </p>
          </>
        </div>
      ))}
    </div>
  );
}

export default Laptop;
