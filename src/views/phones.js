import React, { useState, useEffect } from "react";
import { All_Products } from "../FetchRequests";
function CellPhone() {
  const [products, setProducts] = useState([]);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    All_Products().then((data) => setProducts(data));

    const phonesCategory = products.filter((products) => {
      return products.category === "phone";
    });
    setPhones(phonesCategory);
  }, [phones, products]);
  return (
    <div>
      {phones.map((item) => (
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

export default CellPhone;
