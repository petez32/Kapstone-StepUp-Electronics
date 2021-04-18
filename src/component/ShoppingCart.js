import React,{useState, useEffect} from 'react'
import {useStore} from "../store/store"
import {Link} from "react-router-dom"

const MyCart = () => {
    const user = useStore((state) => state.user)
    const [cart, setCart] = useState([])
    const [currentUser, setCurrentUser]  = useState({})
    let sum = 0

    const DeleteItemFromCart = (event)=>{
        const id = event.target.id
        fetch( "http://localhost:5000/users/delete/" + id,{
            method: "DELETE",
            headers:{"Content-Type":"application/json"}
        }).then((response) => response.json())
        .then(res =>console.log(res))
        
       
    

    }
    // checkout 
    const CheckOut = (event)=>{
       const userId = event.target.id
       fetch( "http://localhost:5000/cart/checkout/" + userId,{
            method: "PATCH",
            headers:{"Content-Type":"application/json"}
        }).then((response) => response.json())
        .then(res =>console.log(res))
        const balance = user.credits - sum
        // update credit
        fetch( "http://localhost:5000/updateCredits/" + userId ,{
            method: "PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                credits:balance
          
            }),
        }).then((response) => response.json())
        .then (response => console.log(response))


    }
  
    useEffect(()=>{
      if(user.loaded === true){
      
     fetch("http://localhost:5000/cart/get/"+ user.id)
     .then(res => res.json())
     .then (data => setCart(data))
     fetch("http://localhost:5000/user/"+ user.id)
     .then(res => res.json())
     .then (data => setCurrentUser(data))
  
        }

  
    },[user,cart])
    // useEffect(()=>{
    //     DeleteItemFromCart()

    // },[cart])
    if(cart.length === 0){
        return(
        <>
        <div>Available Credit: <strong>{currentUser.credits}</strong></div>
         <div>You have no items in the cart</div>
         </>)
    }else {
    return (
       
        <>
         <div>Availabe Credite : <strong>{currentUser.credits}</strong> <button >add Credits</button></div>
        

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
         <div> 
            <Link to ="/cart/checkout"><button onClick= {CheckOut} id = {user.id}>Click To CheckOut</button></Link> 
            </div>
             
        </div>
        </>
    )
        }
}

export default MyCart
