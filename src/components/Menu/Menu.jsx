import React from 'react'
import {NavLink} from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return (
        <div className="Menu">
            <NavLink to="/apartment"  activeClassName="Active-item">apartment</NavLink>
            <NavLink to="/payments" activeClassName="Active-item">payments</NavLink>
            <NavLink to="/cases" activeClassName="Active-item">cases</NavLink>
            <NavLink to="/" activeClassName="Active-item">login</NavLink>
            <NavLink to="/register" activeClassName="Active-item">register</NavLink>
            <NavLink to="/user" activeClassName="Active-item">user</NavLink>
        </div>
    )
}
