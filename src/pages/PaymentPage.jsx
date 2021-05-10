import React from 'react'
import AddPayment from "../components/Payment/AddPayment";
import DynMenu from "../components/gui/DynMenu";

export default function PaymentPage() {
    return (
        <div>
            <DynMenu items={[{to:"/payment/add", title:"add payment"},
            {to:"/payment/show", title:"show payment"}]}/>
                <AddPayment /> 
        </div>
    )
}
