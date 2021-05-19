import React from 'react'
import {Link} from 'react-router-dom'

export default function ApartmentItem(props) {
    const {apartment}=props;
        return (
        <Link to= {`/main/apartments/${apartment._id}`}  style ={{display:'flex',cursor:'pointer', background:'lightblue', justifyContent:'space-around', padding: '5px'}}>
            <div>numOfApartment: {apartment.numOfApartment}</div>
            <div>floor: {apartment.floor}</div>
            <div>sizeOfApartment: {apartment.sizeOfApartment}</div>
            <div>userId: {apartment.userId}</div>
        </Link>
    )
}
