import React, {useState} from 'react';
import FilterExpense from './FilterExpense';
import Skeleton from '../UI/Skeleton/Skeleton'
import ExpenseList from './ExpenseList';
type onDataExpense = {
    items?:any
    isLoading?:any
}

const Expense:React.FC<onDataExpense> = (props) => {

    const [filteredYear, setFilteredYear] = useState("2021")

    const onChangeFilter = (selectedYear:any) => {
        setFilteredYear(selectedYear)
    }

     // const filteredExpense = props.item.filter((expense:any) => {
    //     return expense.date.getFullYear().toString() === filteredYear
    // })

      const filteredExpenses = props.items.filter((expense:any) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });


    return(
        <div>
            <div>
                <FilterExpense yearSelected={filteredYear} onChangeFilter={onChangeFilter}/>
            </div>
            <div>
                {
                    props.isLoading ? new Array(5).fill(1).map((_,i) => {
                        return <Skeleton key={i} />;
                    }) : <ExpenseList items={filteredExpenses}/>
                    
                }
            </div>
        </div>
    )
}

export default Expense