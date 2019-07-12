import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Beneficiaries from './pages/beneficiaries/Beneficiaries';
import { calculateCharge } from './helpers/tariffCalculator';
import { generateShortCode } from './helpers/generateShortCode';

interface IAppState {
  amount: number;
  transactionCost: number;
  minimumBalance: number;
  beneficiaryCode: any;
  beneficiaries: any[];
}

export default class App extends React.Component<any, IAppState>{
  constructor(props: any){
    super(props);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleBeneficiaryChange = this.handleBeneficiaryChange.bind(this);
    this.handlePayClick = this.handlePayClick.bind(this);
    this.state ={
      amount: 100, 
      transactionCost:1.06, 
      minimumBalance: 101.06, 
      beneficiaryCode: null, 
      beneficiaries: [
        { name: "Michael", type: "Individual", code: "0772804043"},
        { name: "Contoso", type: "Merchant", code: "123456" }
      ]
    }
  }
 
  handleAmountChange(e : any){
    this.setState({ 
      amount : e.target.value,
      transactionCost: calculateCharge(e.target.value)
    });
  }

  handlePayClick(){
    const code: string = "tel:" + generateShortCode( this.state.beneficiaryCode, this.state.amount); 
    window.location.href = code;
  }

  handleBeneficiaryChange(e: any){
    alert(e.target.value);
    this.setState({ beneficiaryCode: e.target.value})
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact render={() =>
          <Home amount={this.state.amount} transactionCost={this.state.transactionCost} minimumBalance={this.state.minimumBalance} beneficiaries={this.state.beneficiaries} handleAmountChange={this.handleAmountChange} handleBeneficiaryChange={this.handleBeneficiaryChange} handlePayClick={this.handlePayClick} />}
        />
        <Route path="/beneficiaries/" render={() => <Beneficiaries beneficiaries={this.state.beneficiaries}/>} />
      </BrowserRouter>
    );
  }
};
