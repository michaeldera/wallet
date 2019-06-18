import React from 'react';
import Button from './components/button/Button';
import Input from './components/input/Input';

function App() {
  return (
    <div>
      <header>
        <Input placeholder="Name" />
        <Button>Pay</Button>
      </header>
    </div>
  );
}

export default App;
