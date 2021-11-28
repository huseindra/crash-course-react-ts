import React, { useEffect, useState } from 'react';

import { Container, Main } from '../assets/styles/global';
import Expense from '../components/Expense/Expense';
import NewExpense from '../components/NewExpense/NewExpense';
import BottomNavigation from '../components/UI/BottomNavigation/BottomNavigation';


const dummyData = [
  {
    id:1,
    date:new Date(2021, 2, 12),
    title: "Car Insurance",
    amount: 220000      
  },
  {
    id:2,
    date:new Date(2021, 3, 14),
    title: "Bike Insurance",
    amount: 100000      
  },
  {
    id:3,
    date:new Date(2020, 7, 14),
    title: "Motorcyle Insurance",
    amount: 120000      
  },
  {
    id:4,
    date:new Date(2020, 4, 4),
    title: "Seblak Jaletot",
    amount: 120000      
  }
  ,
  {
    id:5,
    date:new Date(2020, 2, 24),
    title: "Bus Insurance",
    amount: 120000      
  }
]

const HomePage:React.FC = () => {
  const [expenses, setExpenses] = useState(dummyData)
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(false)
    
  },[])
  const addExpense = (expense:any) => {
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses]
    })
  }

  return (
    <Container>
    <Main>
      <header className="App-header">
        <h1>Money Tracker</h1>
      </header>
      {/* section for input  */}
      <section>
          <NewExpense onAddExpense={addExpense}/>
      </section>

      {/* section for contents */}
      <section style={{minHeight:'500px'}}>
        <Expense isLoading={isLoading} items={expenses} />
      </section>
    </Main>
    <BottomNavigation />
    </Container>
  );
}

export default HomePage;
