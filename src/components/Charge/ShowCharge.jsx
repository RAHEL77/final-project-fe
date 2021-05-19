import React,{useState,useEffect} from 'react'
import ChargeItem from './ChargeItem'
import {apiGetCharge} from '../../api/chargeApi'

export default function ShowCharge() {
    const [charges,setCharge]=useState([])
        const getCharges=async()=>{
            const data=await apiGetCharge()
            setCharge(data)
        }
        useEffect(()=>{
            getCharges()
        },[])
        
    return (
        <div>
            {charges.map((charge)=>{
                <ChargeItem charge={charge} key={charge._id}/>
            })}
        </div>
    )
}
