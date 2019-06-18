import React from 'react';
import Button from './components/button/Button';
import Input from './components/input/Input';
import Select from './components/select/Select';

function App() {
  return (
    <div>
      <header>
        <Select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
        </Select>
        <Input placeholder="Name" />
        <Button>Pay</Button>
      </header>
    </div>
  );
}

export default App;
