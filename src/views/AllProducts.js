import React from "react";
import { useEffect, useState } from "react";
import { All_Products } from "../FetchRequests";
import { render } from "react-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //const fetchData = async () => {
    All_Products().then((data) => setProducts(data));

    //setProducts(result.Products);
    //console.log(products);
    // };
    // fetchData();
  }, []);
  //console.log(products);
  // render({
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
