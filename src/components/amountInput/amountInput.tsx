import React, { Fragment } from 'react';
import "./amountInput.css";

function AmountInput(props: any) {
  return (
    <Fragment>
      <label>Amount</label>
      <input className="input" type="number" placeholder={props.placeholder}/>
    </Fragment>

  );
}

export default AmountInput;