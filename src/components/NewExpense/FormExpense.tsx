import React, {useState} from 'react';
import { InputCard, Input, Label, Button } from '../../assets/styles/global';

import "./NewExpense.css"

type onSaveExpenseData = {
    onSaveExpenseData?:any
}
const FormExpense:React.FC<onSaveExpenseData> = (props) => {
    
    // use single state 
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("")

    // use multiple state once 
    // const [expenseInput, setExpenseInput] = useState({
    //     title: "",
    //     amount: "",
    //     date:""
    // })


    const OnChangeTitle = (event:any) =>{
        setTitle(event.target.value)
        // not always use latest state snapshot 
        // setExpenseInput({
        //     ...expenseInput,
        //     title: event.target.value
        // })
         //  always use latest state snapshot 
        // setExpenseInput((prevState) =>{
        //     return {...prevState, title: event.target.value }
        // })
    }

    const OnChangeAmount = (event:any) =>{
        setAmount(event.target.value)
    }
    
    const OnChangeDate = (event:any) =>{
        setDate(event.target.value)
    }

    const submitHandler = (event:any) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData)

        setTitle("")
        setAmount("")
        setDate("")
    }
    
    return(
    <InputCard>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <Label htmlFor="Title">Title</Label>
                <Input type="text" value={title} onChange={OnChangeTitle} placeholder="Input something..." />
            </div>
            <div className="new-expense__controls">
                <Label htmlFor="Amount">Amount</Label>
                <Input type="number" value={amount} onChange={OnChangeAmount} placeholder="Number" min="0" max="999999" />
            </div>
            <div className="new-expense__controls">
                <Label htmlFor="Date">Date</Label>
                <Input type="date" value={date} onChange={OnChangeDate} min="2019-01-01" max="2025-12-31"/>
            </div>
            <div className="new-expense__controls">
                <Button type="submit" >Add Expense</Button>
            </div>
            
        </form>
    </InputCard>
    
    )
}


export default FormExpense
