import React from 'react'
import Login from "../components/User/Login";
import {Link} from "react-router-dom";

export default function LoginPage() {
    return (
        <div>
            <Link to="/register">Go to Register</Link>

                <Login /> 
        </div>
    )
}
