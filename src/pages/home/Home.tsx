import './home.css';
import React from 'react';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';


function Home(props: any) {
  return (
    <div>
      <header>
        <span>$80</span>
      </header>
      <section className="card-clear">
        Your transaction fee: $XXX.XX
      </section>
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