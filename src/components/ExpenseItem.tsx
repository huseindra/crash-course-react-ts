
import React, { useState } from 'react';
import {Card, DateItem, Button, TitleItem, PriceItem} from "../assets/styles/global"


type CardProps = {
    date?: string;
    title?: string;
    price?:number
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
            <DateItem>{props.date}</DateItem>
            <TitleItem>{title}</TitleItem>
            <Button onClick={clickHandle}>Change Title</Button>
        </div>
        <PriceItem>$ {props.price}</PriceItem>

        </Card>
    )
}

export default ExpenseItem