import React from 'react'
  //dateOfCharge,amount,caseOf,payer,receivedBy,typeOfCharge,

export default function ChargeItem(props) {
    const {charge}=props;
        return (
        <div>
            <div>{charge.dateOfCharge}</div>
            <div>{charge.amount}</div>
            <div>{charge.caseOf}</div>
            <div>{charge.payer}</div>
            <div>{charge.receivedBy}</div>
            <div>{charge.typeOfCharge}</div>
        </div>
    )
}
