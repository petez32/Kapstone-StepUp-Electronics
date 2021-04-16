import React from "react";
import { useEffect, useState } from "react";
import { All_Products } from "../FetchRequests";

function AllProducts(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    All_Products().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((item) => (
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
export default AllProducts;
