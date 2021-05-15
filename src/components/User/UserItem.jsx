import React from 'react'
import "./UserItem.css"
import {Link} from 'react-router-dom'

{/* <button>
    onclick= apidelete(userid)
</button> */}
export default function UserItem(props) {

    const {user}=props;
    console.log(user);
        return (
        <Link to={`/users/${user._id}`} className="UserItem">
            <div>{user.email}</div>
            <div>{user.name}</div>
        </Link>
    )
}
