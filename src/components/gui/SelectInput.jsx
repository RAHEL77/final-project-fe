import React from "react";

export default function SelectInput(props) {
    const {id,value,setter,title,options}=props;
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <select id={id} value={value} onChange={(e) => setter(e.target.value)}>
        {options.map((item)=>{
            return <option value={item.id}>{item.name} </option>
        })}
      </select>
      
    </div>
  );
}
