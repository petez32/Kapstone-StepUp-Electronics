import React , {useState, useEffect}from 'react'
import {useStore} from "../store/store"

const Order = () => {
    const user = useStore((state) => state.user)
    const[cart, setCart] = useState([])
    useEffect(()=>{
        if(user.loaded === true){
        
       fetch("http://localhost:5000/order/"+ user.id)
       .then(res => res.json())
       .then (data => setCart(data))
      
    
          }
  
    
      },[user, cart])
    return (
        <>
        <div>
            {cart.map(item =>{
                return(
                    <>
                    <div> <strong>Product Name:</strong>{item.productName}</div>
                    <div> <strrong>procuct detail :</strrong>{item.productDetail}</div>
                    </>
                )
            })}
            
        </div>
        </>
    )
}

export default Order
