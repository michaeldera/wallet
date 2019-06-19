import React from 'react';
import "./amountInput.css";

function Input(props: any) {
  return (
    <input className="input" type="number" placeholder={props.placeholder}/>
  );
}

export default Input;