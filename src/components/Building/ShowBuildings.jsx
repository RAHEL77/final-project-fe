import React,{useState,useEffect} from 'react'
import BuildingItem from './BuildingItem'
import {apiGetBuildings} from '../../api/buildingApi'

export default function ShowBuilding() {
    const [buildings,setBuildings]=useState([])
        const getBuildings=async()=>{
            const data=await apiGetBuildings()
            setBuildings(data)
        }
        useEffect(()=>{
            getBuildings()
        },[])
        
    return (
        <div>
            {buildings.map((building)=>{
                <BuildingItem building={building} key={building._id}/>
            })}
        </div>
    )
}
