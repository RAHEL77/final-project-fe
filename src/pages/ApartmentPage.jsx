import React from 'react'
import { Route } from 'react-router';
import AddApartment from "../components/Apartment/AddApartment";
import ShowApartments from "../components/Apartment/ShowApartments";
import UpdateApartment from "../components/Apartment/UpdateApartment";

export default function ApartmentPage() {
    return (
        <div>
                <AddApartment /> 
                <Route path="/main/apartments/:apartmentid"><UpdateApartment/></Route>
                <ShowApartments /> 
        </div>
    )
}
