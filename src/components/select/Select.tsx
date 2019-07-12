import React from 'react';
import "./select.css";

function Select(props: any) {
  return (
    <div className="select-input-control">
      <label className="select-label">Beneficiary</label>
      <select onChange={props.onChange} className="select-input">
        <option selected={true} disabled={true} value="Select">Beneficiary</option>
        {props.children}
      </select>
    </div>
  );
}

export default Select;