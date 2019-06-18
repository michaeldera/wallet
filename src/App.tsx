import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Beneficiaries from './pages/beneficiaries/Beneficiaries';

function App() {
  return (
    <BrowserRouter>    
      <Link to="/beneficiaries">Beneficiaries</Link>
      <Route path="/" exact component={Home}/>
      <Route path="/beneficiaries/" component={Beneficiaries}/>
    </BrowserRouter>
  );
}

export default App;
