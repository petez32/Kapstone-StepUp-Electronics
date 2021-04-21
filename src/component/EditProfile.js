import React from 'react'
import {useStore} from "../store/store"

const EditProfile = () => {
    
    return (
        <>
        <div>
            <h3>Edit Profile</h3>
            <form>
                <div> user Name: <input type = "text"/></div>
                <div> First Name: <input type = "text"/></div>
                <div> last Name: <input type = "text"/></div>
                <div> Email: <input type = "text"/></div>
            </form>
            
        </div>
        </>
    )
}

export default EditProfile
