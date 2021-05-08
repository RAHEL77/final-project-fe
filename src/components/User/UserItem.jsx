import React from 'react'
{/* <button>
    onclick= apidelete(userid)
</button> */}
export default function UserItem(props) {
    const {user}=props;
        return (
        <div>
            <div>{user.email}</div>
            <div>{user.name}</div>
            <div>{user.password}</div>
        </div>
    )
}
