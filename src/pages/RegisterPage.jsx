import React from 'react'
import Register from "../components/User/Register";
import {Link} from "react-router-dom";

export default function RegisterPage() {
    return (
        <div>
                <Link to="/">Go to Login</Link>
                <Register /> 
        </div>
    )
}
