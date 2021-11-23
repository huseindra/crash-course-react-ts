import React from "react"
import {ListExpense} from "./ExpenseStyled"
import ExpenseItem from "./ExpenseItem"
import { NoDataFound } from "../../assets/styles/global"

type onExpenseList = {
    items?:any,
    length?:any
}

const ExpenseList:React.FC<onExpenseList> = (props) => {
    
    if(props.items.length === 0){
      return <NoDataFound> Data Not Found</NoDataFound>}

    return(
        <ListExpense>
          {
              props.items.map((item:any) =>(

                <ExpenseItem key={item.id}  date={item.date} title={item.title} amount={item.amount}/>
            )) 
          }
        </ListExpense>       
    ) 
}


export default ExpenseList