import './home.css';
import React from 'react';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';
import AmountInput from '../../components/amountInput/amountInput';
import { Link } from 'react-router-dom';

export default class Home extends React.Component<any, any> {
  shouldComponentUpdate(nextProps: any, nextState: any){
    return false;
  }
  render() {
    return (
      <div>
        <header className="transaction-header">
          <span className="amount">${this.props.amount}</span>
          <p className="transaction-detail">Transaction Cost: ${this.props.transactionCost}</p>
          <p className="transaction-detail">Minimum Balance: ${this.props.minimumBalance}</p>
        </header>
        <section className="card">
          <AmountInput amount={this.props.amount} handleAmountChange={this.props.handleAmountChange} />
          <Select onChange={this.props.handleBeneficiaryChange}>
            {this.props.beneficiaries.map(
              (s: any) => (
                <option key={s.code} value={s.code}>{s.name}</option>
              )
            )}
          </Select>
          <Button onClick={this.props.handlePayClick}>Pay</Button>
        </section>
        <section>
          <Link className="home-link" to="/beneficiaries">View Beneficiaries</Link>
        </section>
      </div>
    );
  }
}