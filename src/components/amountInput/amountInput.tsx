import React, { Fragment } from 'react';
import "./amountInput.css";

function AmountInput(props: any) {
  return (
    <Fragment>
      <label className="amount-input-label">Amount</label>
      <input className="amount-input" type="number" placeholder={props.placeholder}/>
    </Fragment>

  );
}

export default AmountInput;