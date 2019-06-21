import React from 'react';
import "./select.css";

function Select(props: any) {
  return (
    <div className="select-input-control">
      <label className="select-label">Beneficiary</label>
      <select onChange={props.onChange} className="select-input">
        {props.children}
      </select>
    </div>
  );
}

export default Select;