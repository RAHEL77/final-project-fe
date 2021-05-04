import React, { useState } from "react";
import {apiUpdate} from '../../api/userApi'

const Update = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onUpdate = (e) => {
    e.preventDefault();
    console.log(email,name,password);
    apiUpdate(email,name,password)
  };

  return (
    <div>
      <form onSubmit={onUpdate}>

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

export default Update;
