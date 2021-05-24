import React from "react";

export default function Input({ placeholder, onChange, type = "text" }) {
  return (
    <input placeholder={placeholder} onChange={onChange} type={type}></input>
  );
}
