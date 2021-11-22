
import React, { useState } from 'react';
import {Card, Button, TitleItem, PriceItem} from "../../assets/styles/global"
import ExpenseDate from "./ExpenseDate"

type CardProps = {
    date?: any;
    title?: string;
    amount?:number
}
const ExpenseItem: React.FC<CardProps> = (props) => {
    const [title, setTitle] = useState(props.title)
    
    const clickHandle = () => {
        setTitle("Updated!")
        console.log(title)
    }

    return(
        <Card>
        <div>
            <ExpenseDate date={props.date}/>
            <TitleItem>{title}</TitleItem>
            <Button onClick={clickHandle}>Change Title</Button>
        </div>
        <PriceItem>$ {props.amount}</PriceItem>

        </Card>
    )
}

export default ExpenseItem