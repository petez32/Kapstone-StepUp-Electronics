import React, { useEffect, useState } from "react";
import { All_Products,addToCart } from "../FetchRequests";
import {useStore} from "../store/store"

function Television() {
  const [products, setProducts] = useState([]);
  const [televisions, setTelevisions] = useState([]);
  const user = useStore((state) =>state.user)
  const addItemToCart = (event)=>{
    const productId = (event.target.id)
    const itemToAdd = products.filter(product =>{
      return product._id === productId
    })
    const item = itemToAdd[0]
    
    const productName = item.productName
    const price = item.price
    const productDetail = item.productDetail
    const userId = user.id
  addToCart(  userId,productName,price, productDetail).
  then(res => console.log(res))

  }

  useEffect(() => {
    All_Products().then((data) => setProducts(data));

  }, []);

  useEffect(() => {


    const TelevisionCategory = products.filter((products) => {
      return products.category === "televission";
    });
    setTelevisions(TelevisionCategory);
  }, [ products]);
  return (
    <div>
      {televisions.map((item) => (
        <div>
          <img src={item.imageUrl} alt="" />
          <>
            <h1> {item.productName} </h1>
            <p> {item.productDetail} </p>
            <p> {item.price} </p>
            {user.token &&
            <div> <button
            onClick = {addItemToCart}
            id = {item._id}
              >Add To Cart</button></div>
             }
          </>
        </div>
      ))}
    </div>
  );
}

export default Television;
