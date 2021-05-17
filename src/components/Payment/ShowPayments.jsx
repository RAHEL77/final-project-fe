import React,{useState,useEffect} from 'react'
import PaymentItem from './PaymentItem'
import {apiGetPayments} from '../../api/paymentApi'

export default function ShowPayments() {
    const [payment,setPayment]=useState([])
        const getPayments=async()=>{
            const data=await apiGetPayments()
            setPayment(data)
        }
        useEffect(()=>{
            getPayments()
        },[])
        
    return (
        <div>
            {payments.map((payment)=>{
                <PaymentItem payment={payment} key={payment._id}/>
            })}
        </div>
    )
}
