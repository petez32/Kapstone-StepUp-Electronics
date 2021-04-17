import React,{useState, useEffect} from 'react'
import {useStore} from "../store/store"

const MyCart = () => {
    const user = useStore((state) => state.user)
    const [cart, setCart] = useState([])
    let sum = 0

    const DeleteItemFromCart = (event)=>{
        const id = event.target.id
        fetch( "http://localhost:5000/cart/delete/" + id,{
            method: "DELETE",
            headers:{"Content-Type":"application/json"}
        }).then((response) => response.json())
        .then(res =>console.log(res))
        const CheckOut = ()=>{

        }
    

    }
  
    useEffect(()=>{
      if(user.loaded === true){
      
     fetch("http://localhost:5000/cart/get/"+ user.id)
     .then(res => res.json())
     .then (data => setCart(data))
  
        }

  
    },[user,cart])
    // useEffect(()=>{
    //     DeleteItemFromCart()

    // },[cart])
    if(cart.length === 0){
        return <div>You have no items in the cart</div>
    }else {
    return (
       
        <>
         <div>Availabe Credite : <strong>{user.credits}</strong> <button >add Credits</button></div>
        

        <div>
            <table>
                <tr> <td>Product Name</td><td> Price</td><td></td></tr>
            {cart && cart.map(item =>{
                {sum = sum + item.price}
                return(
                    
                
                    <tr>
                         <td>{item.productName}</td>
                         <td>{item.price}</td>
                         <td><button onClick = {DeleteItemFromCart} id = {item._id}>Delete</button></td>
                     </tr>
                    
                )

            })}
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>{sum}</strong> </td>
                
            </tr>
          
         </table>
         <div><button>Click To CheckOut</button></div>
            
        </div>
        </>
    )
        }
}

export default MyCart
