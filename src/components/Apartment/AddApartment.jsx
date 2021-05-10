import React, { useState, useEffect } from "react";
import {apiGetUsers} from '../../api/userApi'
import {apiAdd} from '../../api/apartmentApi'
import './AddApartment.css'
import TextInput from '../gui/TextInput'
import SelectInput from '../gui/SelectInput'



const AddApartment = () => {
  const [numOfApartment, setnumOfApartment] = useState("");
  const [floor, setFloor] = useState("");
  const [sizeOfApartment, setSizeOfApartment] = useState("");
  const [userId, setUserId] = useState("");

  const [allUsers, setAllUsers] = useState([]);


   const getAllUsers=async ()=>{
    const users=await apiGetUsers()
    setAllUsers(users.map((u)=>{
    return {...u,id:u._id}
    }))
   }

    useEffect(()=>{
      getAllUsers()    
  },[])


  const onAddApartment = (e) => {
    e.preventDefault();
    console.log(numOfApartment,floor,sizeOfApartment,userId);
    apiAdd(numOfApartment,floor,sizeOfApartment,userId)
  };

  return (
    <div className="AddApartment">
      <h3>ADD APARTMENT</h3>
      <form onSubmit={onAddApartment} style={{display:"flex"}}>
      <TextInput  id="numOfApartment" value={numOfApartment} title ="Apartment Number" setter={setnumOfApartment}/>
      
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

        
        <SelectInput  id="userId" value={userId} setter={setUserId} options={allUsers}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddApartment;
