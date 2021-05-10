import React, { useState } from "react";
import {apiUpdate} from '../../api/apartmentApi'

const Update = () => {
  const [apartmentId, setApartmentId] = useState();
  const [numOfApartment, setNumOfApartment] = useState(1);
  const [floor, setFloor] = useState(1);
  const [sizeOfApartment, setSizeOfApartment] = useState(18);
  // const [userId, setUserId] = useState();

  const onUpdate = (e) => {
    e.preventDefault();
    console.log(apartmentId,numOfApartment,floor,sizeOfApartment);
    apiUpdate(apartmentId,numOfApartment,floor,sizeOfApartment)
  };

  return (
    <div>
      <h3>UPDATE APARTMENT</h3>

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

export default Update;
