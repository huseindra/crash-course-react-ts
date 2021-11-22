
import React from 'react';
import { DateItem } from '../../assets/styles/global';

type onDateData = {
    month?:string,
    day?:string,
    year?:number,
    date?:any
}
const ExpenseItem: React.FC<onDateData> = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()
    
    return(
        <div>
            <DateItem >{month}, {day} {year}</DateItem>
        </div>
    )
}

export default ExpenseItem