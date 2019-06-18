import React from 'react';
import "./select.css";

function Select(props: any) {
  return (
    <select className="select">
      {props.children}
    </select>
  );
}

export default Select;