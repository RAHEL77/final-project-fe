import React, { useState, useEffect } from "react";
import ApartmentItem from "./ApartmentItem";
import { apiGetApartments } from "../../api/apartmentApi";

export default function ShowApartments() {
  const [apartments, setApartments] = useState([]);

  const getApartments = async () => {
    const data = await apiGetApartments();
    console.log(data);
    setApartments(data.allApartments);
  };

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <div>
        <h1>apartment list</h1>
      {apartments.map((apartment) => {
        return <ApartmentItem apartment={apartment} key={apartment._id} />;
      })}
    </div>
  );
}
