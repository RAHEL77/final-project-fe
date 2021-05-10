import React from "react";
import { NavLink } from "react-router-dom";
import "./DynMenu.css";

export default function DynMenu(props) {
  const { items } = props;
  return (
    <div className="Menu">
      {items.map((item) => {
        return (
          <NavLink to={item.to} activeClassName="Active-item">
            {item.title}
          </NavLink>
        );
      })}
      
    </div>
  );
}
