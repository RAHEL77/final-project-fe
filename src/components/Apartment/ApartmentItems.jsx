import React,{useState,useEffect} from 'react'
import ApartmentItem from './ApartmentItem'
import {apiGetApartments} from '../../api/apartmentApi'

export default function ApartmentItems() {
    const [apartments,setApartment]=useState([])
        const getApartments=async()=>{
            const data=await apiGetApartments()
            setApartments(data)
        }
        useEffect(()=>{
            getApartments()
        },[])
        
    return (
        <div>
            {apartments.map((u)=>{
                <ApartmentItem apartment={apartment} key={apartment.apartmentId}/>
            })}
        </div>
    )
}
