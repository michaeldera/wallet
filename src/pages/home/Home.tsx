import './home.css';
import React from 'react';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';


function Home(props: any) {
  return (
    <div>
      <header>        
        <span className="amount">$67.09</span>
        <p className="transaction-cost">Transaction Cost: $3.23</p>
      </header>
      <section className="card">
        <Select>
          <option value="michael">Michael</option>
          <option value="zoey">Zoey</option>
          <option value="add-person">Add Person</option>
        </Select>
        <Button>Pay</Button>
      </section>
    </div>
  );
}

export default Home;