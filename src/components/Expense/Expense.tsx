import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import FilterExpense from './FilterExpense';
import Skeleton from '../UI/Skeleton/Skeleton'
import { NoDataFound } from '../../assets/styles/global';
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
        const filter =  expense.date.getFullYear().toString() === filteredYear;
        console.log(filter)
        return filter
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
                    }) :
                    filteredExpenses.length ? filteredExpenses.map((item:any) =>(

                        <ExpenseItem key={item.id}  date={item.date} title={item.title} amount={item.amount}/>
                    )
                    ) : <NoDataFound> Data Not Found</NoDataFound>
                }
            </div>
        </div>
    )
}

export default Expense