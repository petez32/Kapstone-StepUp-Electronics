import React, { useState, useEffect } from "react";
import { All_Products } from "../FetchRequests";

function Tablet() {
  const [products, setProducts] = useState([]);
  const [tablets, setTablets] = useState([]);

  useEffect(() => {
    All_Products().then((data) => setProducts(data));

    const TabletsCategory = products.filter((products) => {
      return products.category === "tablet";
    });
    setTablets(TabletsCategory);
  }, [tablets, products]);
  return (
    <div>
      {tablets.map((item) => (
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

export default Tablet;
