import React,{useState,useEffect} from 'react'
import UserItem from './UserItem'
import {apiGetUsers} from '../../api/userApi'

export default function UserItems() {
    const [users,setUsers]=useState([])
        const getUsers=async()=>{
            const data=await apiGetUsers();
            setUsers(data)
        }
        useEffect(()=>{
            getUsers()
        },[])
        
    return (
        <div>
            {users && users.map((user)=><UserItem user={user} key={user._id}/>
            )}
        </div>
    )
}
