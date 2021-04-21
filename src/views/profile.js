import React, { useEffect,useState} from 'react'
import { Link, Route } from 'react-router-dom'
import EditProfile from '../component/EditProfile'
import {useStore} from "../store/store"

const Profile = () => {
    const user = useStore((state) =>state.user)
    const [currentUser, setCurrentUser] = useState({})
 
    useEffect(()=>{
      if(user.loaded === true){
      fetch( "http://localhost:5000/user/" + user.id ,{
      method: "GET",
      headers:{"Content-Type":"application/json"}})
      .then((response) => response.json())
  .then (response => setCurrentUser(response))
      }
      
    }, [user, currentUser])
    return (
     
    
        <>
        <div>
          <h1>{(currentUser &&currentUser.userName)}'s Profile </h1>
          <h3>Credit Balance: {currentUser.credits}</h3>
          <div>Click To<Link to = "/Profile/edit"><strong>  Edit</strong> Profile </Link>  or  <Link to = "/user/order"> View Your Order</Link></div>
          
            <div> Name:<span>{(currentUser.firstName)}  {(currentUser.lastName)}</span>  </div>
            <div> User Name:<span>{currentUser.userName}  </span>  </div>
            <div> Email:<span>{currentUser.email}  </span>  </div>
        </div>
      

        <div>
          <Route path= "/Profile/Edit" component = {EditProfile}/>
        
        </div>

        </>
    )
}

export default Profile
