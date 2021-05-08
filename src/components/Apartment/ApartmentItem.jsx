import React from 'react'

export default function ApartmentItem(props) {
    const {apart1}=props;
        return (
        <div>
            <div>{apart1.numOfApartment}</div>
            <div>{apart1.floor}</div>
            <div>{apart1.sizeOfApartment}</div>
            <div>{apart1.userId}</div>
        </div>
    )
}
