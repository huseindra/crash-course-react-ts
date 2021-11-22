import React, { useState } from 'react';

import { Container } from './assets/styles/global';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';


const dummyData = [
  {
    id:1,
    date:new Date(2021, 2, 12),
    title: "Car Insurance",
    amount: 220000      
  },
  {
    id:2,
    date:new Date(2021, 2, 12),
    title: "Bike Insurance",
    amount: 100000      
  },
  {
    id:3,
    date:new Date(2020, 7, 14),
    title: "Motorcyle Insurance",
    amount: 120000      
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(dummyData)

  const addExpense = (expense:any) => {
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses]
    })
  }

  return (
    <Container>
    <div className="App">
      <header className="App-header">
        <h1>Progressive Web Apps</h1>
      </header>
      {/* section for input  */}
      <section>
        <div >
          <NewExpense onAddExpense={addExpense}/>
        </div>
      </section>

      {/* section for contents */}
      <section>
        <Expense onDataExpense={expenses} />
      </section>
    </div>
    </Container>
  );
}

export default App;
