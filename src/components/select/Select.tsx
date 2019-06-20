import React, { Fragment } from 'react';
import "./select.css";

function Select(props: any) {
  return (
    <Fragment>
      <label className="select-label">Beneficiary</label>
      <select className="select">
        {props.children}
      </select>
    </Fragment>

  );
}

export default Select;