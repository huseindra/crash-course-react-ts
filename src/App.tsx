import React from 'react';

import { Container } from './assets/styles/global';
import ExpenseItem from './components/ExpenseItem';
import {BottomNav} from './components/UI/BottomNavigation/BottomNavigation';

const App = () => {

  const data = [
    {
      id:1,
      date:"August 21, 2021",
      title: "Car Insurance",
      price: 200000      
    },
    {
      id:2,
      date:"August 21, 2021",
      title: "Bike Insurance",
      price: 200000      
    },
    {
      id:3,
      date:"August 21, 2021",
      title: "Motorcyle Insurance",
      price: 200000      
    }
  ]
  return (
    <Container>
    <div className="App">
      <header className="App-header">
        <h1>Progressive Web Apps</h1>
      </header>
        {
          data.map((item) =>(
            <ExpenseItem key={item.id} date={item.date} title={item.title} price={item.price}/>
          )
          )
        }
        <BottomNav/>
    </div>
    </Container>
  );
}

export default App;
