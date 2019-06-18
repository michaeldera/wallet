import React from 'react';
import Select from '../../components/select/Select';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';


function Home(props: any) {
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

export default Home;