import React, {useState} from 'react';
import { InputCard, Input, Label, Button } from '../../assets/styles/global';

import "./NewExpense.css"

const NewExpense:React.FC = () => {
    
    // use single state 
    // const [title, setTitle] = useState("")

    // use multiple state once 
    const [expenseInput, setExpenseInput] = useState({
        title: "",
        amount: "",
        date:""
    })


    const OnChangeTitle = (event:any) =>{
        setExpenseInput({
            ...expenseInput,
            title: event.target.value
        })
    }
    
    return(
    <InputCard>
        <form action="expense__controls" method="post">
            <div className="new-expense__controls">
                <Label htmlFor="Title">Title</Label>
                <Input type="text" onChange={OnChangeTitle} placeholder="Input something..." />
            </div>
            <div className="new-expense__controls">
                <Label htmlFor="Amount">Amount</Label>
                <Input type="number" placeholder="Number" min="0" max="999999" />
            </div>
            <div className="new-expense__controls">
                <Label htmlFor="Date">Date</Label>
                <Input type="date" min="2019-01-01" max="2025-12-31"/>
            </div>
            <div className="new-expense__controls">
                <Button type="submit" >Add Expense</Button>
            </div>
            
        </form>
    </InputCard>
    
    )
}


export default NewExpense
