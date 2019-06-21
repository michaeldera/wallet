import React from 'react';
import "./amountInput.css";

export default class AmountInput extends React.Component<any, any> {
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return false;
  }
  render() {
    return (
      <div className="amount-input-control">
        <label htmlFor="amount" className="amount-input-label">Amount</label>
        <div>
          <div className="amount-input-sym">$</div>
          <input name="amount" className="amount-input" value={this.props.amount} type="number" placeholder="100" onChange={this.props.handleAmountChange} />
        </div>
      </div>
    );
  }
}
