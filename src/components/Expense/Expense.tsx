import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import FilterExpense from './FilterExpense';

type onDataExpense = {
    onDataExpense?:any
    items?:any
}

const Expense:React.FC<onDataExpense> = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020")

    const onChangeFilter = (event:any) => {
        setFilteredYear(event.target.value)
    }

     // const filteredExpense = props.item.filter((expense:any) => {
    //     return expense.date.getFullYear().toString() === filteredYear
    // })

    //   const filteredExpenses = props.item.filter((expenses:any) => {
    //     return expenses.date.getFullYear().toString() === filteredYear;
    //   });
    
    return(
        <div>
            <div>
                <FilterExpense selected={filteredYear} onChangeFilter={onChangeFilter}/>
            </div>
            <div>
                {
                    props.onDataExpense.map((item:any) =>(

                        <ExpenseItem key={item.id}  date={item.date} title={item.title} amount={item.amount}/>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Expense