import React, {useState, useEffect} from 'react'
import {useStore} from "../store/store"
import {Link} from "react-router-dom"


const AddCredits = () => {
    
const [totalCost, setTotalCost] = useState(0)
const [credits, setCredits] = useState(0)
 const user= useStore((state)=>state.user)
 const [balance, setBalance] =useState(user.credits)

    const handlOnChange = (event)=>{  
        if(event.target.id = "credits"){
            setCredits(event.target.value)
        }

    }
    const handleSubmit = ()=>{
     
        fetch( "http://localhost:5000/updateCredits/" + user.id ,{
            method: "PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                credits:balance
          
            }),
        }).then((response) => response.json())
        .then (response => console.log(response))
    }

    useEffect(() => {
        setTotalCost(credits*2)
        setBalance(Number(credits)+ Number(user.credits))


    }, [credits, user])

    return (
        <>

        <div>
            <h2>Add Credits</h2>
            <div> <strong>Note:</strong> Each credit costs $2 </div>
            <div><strong>Total Amount Tobe charged: $</strong>{totalCost} </div>
           
            <form onSubmit = {handleSubmit}>
                <div>
                <label >Credit Amount</label>
                <input type="text"  id= "credits" onChange= {handlOnChange}></input>
                </div>
                <div>
                <label >Credit Card Number</label>
                <input type="text"  id= "Card"></input>
                </div>
                <div>
                <label >Expiry Date</label>
                <input type="text"  id= "date"></input>
                </div>
                <div>
                <label >Security Code</label>
                <input type="text"  id= "code"></input>
                </div>
                <div><Link to = "/ShoppingCart"><button onClick= {handleSubmit} type = "submit">Submit</button></Link></div>
                
            </form>
            
        </div>
        </>
    )
}

export default AddCredits
