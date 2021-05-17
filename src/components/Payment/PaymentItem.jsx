import React from 'react'

export default function PaymentItem(props) {
    const {payment}=props;
        return (
        <div>
            <div>{payment.dateOfPayment}</div>
            <div>{payment.amount}</div>
            <div>{payment.details}</div>
            <div>{payment.payer}</div>
            <div>{payment.recivedBy}</div>
        </div>
    )
}
