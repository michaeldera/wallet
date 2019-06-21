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
    this.state ={
      amount: 100, 
      transactionCost:1.06, 
      minimumBalance: 101.06, 
      beneficiaries: [
        { name: "Michael", type: "Individual", mobileNumber: "0770000000"},
        { name: "Contoso", type: "Merchant", mobileNumber: "123456" }
      ]
    }
  }
  render() {
    const {amount, transactionCost, minimumBalance, beneficiaries} = this.state;
    return (
      <BrowserRouter>
        <Route path="/" exact component={() =>
          <Home amount={amount} transactionCost={transactionCost} minimumBalance={minimumBalance} beneficiaries={beneficiaries} />}
        />
        <Route path="/beneficiaries/" component={() => <Beneficiaries />} />
      </BrowserRouter>
    );
  }
};
