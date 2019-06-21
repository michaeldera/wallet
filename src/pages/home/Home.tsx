import './home.css';
import React from 'react';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';
import AmountInput from '../../components/amountInput/amountInput';
import { Link } from 'react-router-dom';

function Home(props: any) {
  return (
    <div>
      <header className="transaction-header">        
        <span className="amount">{props.amount}</span>
        <p className="transaction-detail">Transaction Cost: {props.transactionCost}</p>
        <p className="transaction-detail">Minimum Balance: {props.minimumBalance}</p>
      </header>
      <section className="card">
        <AmountInput handleAmountChange={props.handleAmountChange}/>
        <Select onChange={props.handleBeneficiaryChange}>
          { props.beneficiaries.map( 
            (s: any) => (
              <option key={s.code} value={s.code}>{s.name}</option>
            )
          )}
        </Select>
        <Button onClick={props.handlePayClick}>Pay</Button>
      </section>
      <section>
        <Link className="home-link" to="/beneficiaries">View Beneficiaries</Link>
      </section>
    </div>
  );
}

export default Home;