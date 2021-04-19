import React, { useState, useEffect } from "react";
import { All_Products } from "../FetchRequests";
function Desktop() {
  const [products, setProducts] = useState([]);
  const [desktops, setDesktops] = useState([]);

  useEffect(() => {
    All_Products().then((data) => setProducts(data));

    const desktopsCategory = products.filter((products) => {
      return products.category === "desktop";
    });
    setDesktops(desktopsCategory);
  }, [desktops, products]);
  return (
    <div>
      {desktops.map((item) => (
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

export default Desktop;
