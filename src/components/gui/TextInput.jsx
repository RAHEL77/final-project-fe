import React from "react";

export default function TextInput(props) {
    const {id,value,setter,title}=props;
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        id={id}
        required
        value={value}
        onChange={(e) => setter(e.target.value)}
      />
    </div>
  );
}
