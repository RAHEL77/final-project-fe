import React, { useState,useEffect } from "react";
import {apiUpdate,apiGetUser} from '../../api/userApi'
import {useParams} from 'react-router-dom'


const UpdateUser = () => {
  const params= useParams()
  console.log(params)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  useEffect(()=>{
   const f=async()=>{
     const data= await apiGetUser(params.userId)
     setEmail(data.existingUser.email)
     setName(data.existingUser.name)
    }

   f()

  },[])
  const onUpdate = (e) => {
    e.preventDefault();
    console.log(email,name,password);
    apiUpdate(email,name,password)
  };

  return (
    <div>
            <h3>UPDATE USER</h3>

      <form onSubmit={onUpdate} style={{display:"flex"}}>

      <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

           <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateUser;
