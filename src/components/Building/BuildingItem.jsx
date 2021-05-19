import React from 'react'
//balance, addressOfBuilding, charges, payments,users
export default function BuildingItem(props) {
    const {building}=props;
        return (
        <div>
            <div>{building.balance}</div>
            <div>{building.addressOfBuilding}</div>
            <div>{building.charges}</div>
            <div>{building.payments}</div>
            <div>{building.users}</div>
        </div>
    )
}
