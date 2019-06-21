import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Beneficiaries from './pages/beneficiaries/Beneficiaries';

interface IAppState {
  amount: number;
  transactionCost: number;
  minimumBalance: number;
  beneficiaries: any[];
}

export default class App extends React.Component<any, IAppState>{
  constructor(props: any){
    super(props);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handlePayClick = this.handlePayClick.bind(this);
    this.state ={
      amount: 100, 
      transactionCost:1.06, 
      minimumBalance: 101.06, 
      beneficiaries: [
        { name: "Michael", type: "Individual", code: "0770000000"},
        { name: "Contoso", type: "Merchant", code: "123456" }
      ]
    }
  }

  handleAmountChange(){
    alert("Handling Click");
  }

  handlePayClick(){
    //window.location.href = shortCode
    alert("Ready to pay");
  }

  render() {
    const {amount, transactionCost, minimumBalance, beneficiaries} = this.state;
    return (
      <BrowserRouter>
        <Route path="/" exact component={() =>
          <Home amount={amount} transactionCost={transactionCost} minimumBalance={minimumBalance} beneficiaries={beneficiaries} handleAmountChange={this.handleAmountChange} handlePayClick={this.handlePayClick} />}
        />
        <Route path="/beneficiaries/" component={() => <Beneficiaries beneficiaries={beneficiaries}/>} />
      </BrowserRouter>
    );
  }
};
