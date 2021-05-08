import React,{useState,useEffect} from 'react'
import CaseItem from './CaseItem'
import {apiGetCases} from '../../api/caseApi'

export default function CaseItems() {
    const [cases,setCases]=useState([])
        const getCases=async()=>{
            const data=await apiGetCases()
            setCases(data)
        }
        useEffect(()=>{
            getCases()
        },[])
        
    return (
        <div>
            {cases.map((case1)=>{
                <CaseItem case1={case1} key={case1.caseId}/>
            })}
        </div>
    )
}
