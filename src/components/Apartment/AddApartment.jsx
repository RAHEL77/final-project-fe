import React, { useState } from "react";
import {apiAdd} from '../../api/apartmentApi'

const AddApartment = () => {
  const [numOfApartment, setnumOfApartment] = useState("");
  const [floor, setFloor] = useState("");
  const [sizeOfApartment, setSizeOfApartment] = useState("");
  const [userId, setUserId] = useState("");

  const onAddApartment = (e) => {
    e.preventDefault();
    console.log(numOfApartment,floor,sizeOfApartment,userId);
    apiAdd(numOfApartment,floor,sizeOfApartment,userId)
  };

  return (
    <div>
      <h3>ADD APARTMENT</h3>
      <form onSubmit={onAddApartment} style={{display:"flex"}}>

      <label htmlFor="numOfApartment">Apartment Number</label>
        <input
          type="number"
          id="numOfApartment"
          required
          value={numOfApartment}
          onChange={(e) => setnumOfApartment(+e.target.value)}
        />

           <label htmlFor="floor">Floor</label>
        <input
          type="number"
          id="floor"
          required
          value={floor}
          onChange={(e) => setFloor(+e.target.value)}
        />
        <label htmlFor="sizeOfApartment">Size Of Apartment</label>
        <input
          type="number"
          id="sizeOfApartment"
          required
          value={sizeOfApartment}
          onChange={(e) => setSizeOfApartment(+e.target.value)}
        />

        <label htmlFor="userId">User</label>
        <input
          type="text"
          id="userId"
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddApartment;
