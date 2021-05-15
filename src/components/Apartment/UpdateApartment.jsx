import React, { useState, useEffect } from "react";
import { apiUpdate,apiGetApartment } from "../../api/apartmentApi";
import { useParams } from "react-router-dom";
import TextInput from "../gui/TextInput";
import SelectInput from "../gui/SelectInput";
import { apiGetUsers } from "../../api/userApi";

const Update = () => {
  const [apartmentId, setApartmentId] = useState();
  const [numOfApartment, setNumOfApartment] = useState(1);
  const [floor, setFloor] = useState(1);
  const [sizeOfApartment, setSizeOfApartment] = useState(18);
  const [userId, setUserId] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const params = useParams();
  console.log(params);

  const getAllUsers = async () => {
    const users = await apiGetUsers();
    setAllUsers(
      users.map((u) => {
        return { ...u, id: u._id };
      })
    );
  };

  const getApartment = async () => {
    const apartment = await apiGetApartment(params.apartmentId);
    console.log(apartment);
    setUserId(apartment.userId);
    setApartmentId(apartment._id)
    setSizeOfApartment(apartment.sizeOfApartment)
    setFloor(apartment.floor)
    setNumOfApartment(numOfApartment)
        };

  useEffect(() => {
    getAllUsers();
    getApartment();
  }, []);

  const onUpdate = (e) => {
    e.preventDefault();
    console.log(apartmentId, numOfApartment, floor, sizeOfApartment);
    apiUpdate(apartmentId, numOfApartment, floor, sizeOfApartment,userId);
  };

  return (
    <div>
      <h3>UPDATE APARTMENT</h3>

      <form onSubmit={onUpdate} style={{ display: "flex" }}>
        <TextInput
          id="numOfApartment"
          value={numOfApartment}
          setter={setNumOfApartment}
          title="NumOf Apartment"
        />

        <TextInput id="floor" value={floor} setter={setFloor} title="Floor" />

        <TextInput
          id="sizeOfApartment"
          value={sizeOfApartment}
          setter={setSizeOfApartment}
          title="size Of Apartment "
        />

        <SelectInput
          id="userId"
          value={userId}
          setter={setUserId}
          options={allUsers}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Update;
