import React from 'react';
import "./input.css";

function Input(props: any) {
  return (
    <input className="input" type="string" placeholder={props.placeholder}/>
  );
}

export default Input;