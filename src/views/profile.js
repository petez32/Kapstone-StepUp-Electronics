import React, { useReducer } from 'react'
import { Link, Route } from 'react-router-dom'
import EditProfile from '../component/EditProfile'
import {useStore} from "../store/store"

const Profile = () => {
    const user = useStore((state) =>state.user)
    return (
        <>
        <div>
          <h1>{(user.userName).toUpperCase()}'s Profile </h1>
          <div>Click To<Link to = "/Profile/edit"><strong>  Edit</strong> Profile </Link>  or  <Link to = "/user/order"> View Your Order</Link></div>
           
            <div> Name:<span>{(user.firstName).toUpperCase()}  {(user.lastName).toUpperCase()}</span>  </div>
            <div> User Name:<span>{user.userName}  </span>  </div>
            <div> Email:<span>{user.email}  </span>  </div>
        </div>
      

        <div>
          <Route path= "/Profile/Edit" component = {EditProfile}/>
        
        </div>

        </>
    )
}

export default Profile
