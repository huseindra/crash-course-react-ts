import React, {useState} from 'react';
import { AddButton } from '../../assets/styles/global';
import FormExpense from './FormExpense';

import "./NewExpense.css"

type onAddExpense = {
    onAddExpense?:any;
}

const NewExpense:React.FC<onAddExpense > = (props) => {
    const [isShow, setIsShow] = useState(false)

    const SaveExpenseData = (enteredExpenseData:any) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
       props.onAddExpense(expenseData)
       setIsShow(false)
    }

    const onShowExpense = () => {
        setIsShow(true)
    }

    const onCancelShowExpense = () => {
        setIsShow(false)
    }
    return(
        <div>
            {!isShow && 
                <AddButton onClick={onShowExpense}>Add New Expense</AddButton>
            }
            {isShow && <FormExpense onSaveExpenseData={SaveExpenseData} onCancel={onCancelShowExpense}/>}
        </div>
    )
}


export default NewExpense
