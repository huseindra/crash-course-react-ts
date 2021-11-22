import React from 'react';
import FormExpense from './FormExpense';

import "./NewExpense.css"

type onAddExpense = {
    onAddExpense?:any;
}

const NewExpense:React.FC<onAddExpense > = (props) => {
    
    const SaveExpenseData = (enteredExpenseData:any) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
       props.onAddExpense(expenseData)
    }

    return(
        <FormExpense onSaveExpenseData={SaveExpenseData}/>
    )
}


export default NewExpense
