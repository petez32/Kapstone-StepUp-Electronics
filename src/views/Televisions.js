import React, { useEffect, useState } from "react";
import { All_Products } from "../FetchRequests";

function Television() {
  const [products, setProducts] = useState([]);
  const [televisions, setTelevisions] = useState([]);

  useEffect(() => {
    All_Products().then((data) => setProducts(data));

    const TelevisionCategory = products.filter((products) => {
      return products.category === "televission";
    });
    setTelevisions(TelevisionCategory);
  }, [televisions, products]);
  return (
    <div>
      {televisions.map((item) => (
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

export default Television;
