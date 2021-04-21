import React from 'react'
import {useStore} from "../store/store"

const Profile = () => {
    const user = useStore((state) =>state.user)
    return (
        <>
        <div>
          <h1>{(user.userName).toUpperCase()}'s Profile</h1>
            <div> First Name:</div><span>{user.firstName}</span>
            
        </div>
        </>
    )
}

export default Profile