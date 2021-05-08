import React,{useState,useEffect} from 'react'
import ApartmentItem from './ApartmentItem'
import {apiGetApartments} from '../../api/apartmentApi'

export default function ShowApartments() {
    const [apartments,setApartments]=useState([])
        const getApartments=async()=>{
            const data=await apiGetApartments()
            setApartments(data)
        }
        useEffect(()=>{
            getApartments()
        },[])
        
    return (
        <div>
            {apartments.map((apartment)=>{
                <ApartmentItem apartment={apartment} key={apartment._id}/>
            })}
        </div>
    )
}
