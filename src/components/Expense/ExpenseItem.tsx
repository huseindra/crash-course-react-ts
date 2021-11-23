
import React, { useState } from 'react';
import {Card, ButtonThird, TitleItem, PriceItem} from "../../assets/styles/global"
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
            <TitleItem>{props.title}</TitleItem>
            <ButtonThird onClick={clickHandle}>Change Title</ButtonThird>
        </div>
        <PriceItem>$ {props.amount}</PriceItem>

        </Card>
    )
}

export default ExpenseItem