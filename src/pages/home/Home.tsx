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
        <span className="amount">$67.09</span>
        <p className="transaction-detail">Transaction Cost: $3.23</p>
        <p className="transaction-detail">Minimum Balance: $71.00</p>
      </header>
      <section className="card">
        <AmountInput/>
        <Select>
          <option value="michael">Michael</option>
          <option value="zoey">Zoey</option>
          <option value="add-person">Add Person</option>
        </Select>
        <Button>Pay</Button>
      </section>
      <section>
        <Link className="home-link" to="/beneficiaries">View Beneficiaries</Link>
      </section>
    </div>
  );
}

export default Home;