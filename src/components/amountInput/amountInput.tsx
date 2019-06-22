import React from 'react';
import "./amountInput.css";

export default function AmountInput (props: any) {
    return (
      <div className="amount-input-control">
        <label htmlFor="amount" className="amount-input-label">Amount</label>
        <div>
          <div className="amount-input-sym">$</div>
          <input name="amount" className="amount-input" value={props.amount} type="number" placeholder="100" onChange={props.handleAmountChange} />
        </div>
      </div>
    );
}
