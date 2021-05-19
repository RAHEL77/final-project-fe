import React from 'react'
import Menu from "../components/Menu/Menu";
import {Route} from "react-router-dom";
import ApartmentPage from "./ApartmentPage";
import "./Pages.css";
import PaymentPage from "./PaymentPage";
import UserPage from "./UserPage";
export default function MainPage() {
    return (
        <div className='page'>
      <Menu/>
                    
      <Route path="/main/apartment"> <ApartmentPage/> </Route>
      <Route path="/main/payments"> <PaymentPage/> </Route>
      <Route path="/main/user" exact> <UserPage/> </Route>
      <br/>
      
        </div>
    )
}
