import UpdateUser from "../components/User/UpdateUser";
import ShowUsers from "../components/User/ShowUsers";
import Register from "../components/User/Register";
import React from 'react'

export default function UserPage() {

    return (
        <div>
                <UpdateUser />
                <ShowUsers/>
                <Register/>
                
          </div>
    )
}
