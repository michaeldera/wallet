import React from 'react';
import "./amountInput.css";

function AmountInput(props: any) {
  return (
    <div className="amount-input-control">
      <label className="amount-input-label">Amount</label>
      <div>
        <input className="amount-input" type="number" placeholder="100"/>
      </div>
    </div>

  );
}

export default AmountInput;