import React from 'react'
import {NavLink} from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return (
        <div className="Menu">
            <NavLink to="/main/apartment"  activeClassName="Active-item">apartment</NavLink>
            <NavLink to="/main/payments" activeClassName="Active-item">payments</NavLink>
            <NavLink to="/main/cases" activeClassName="Active-item">cases</NavLink>
            <NavLink to="/" exact activeClassName="Active-item">login</NavLink>
            <NavLink to="/register" activeClassName="Active-item">register</NavLink>
            <NavLink to="/main/user" activeClassName="Active-item">user</NavLink>
        </div>
    )
}
