import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import FilterExpense from './FilterExpense';

type onDataExpense = {
    onDataExpense?:any
}

const Expense:React.FC<onDataExpense> = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020")

    const onChangeFilter = (event:any) => {
        setFilteredYear(event.target.value)
    }
    
    return(
        <div>
            <div>
                <FilterExpense selected={filteredYear} onChangeFilter={onChangeFilter}/>
            </div>
            <div>
                {
                    props.onDataExpense.map((item:any) =>(

                        <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Expense