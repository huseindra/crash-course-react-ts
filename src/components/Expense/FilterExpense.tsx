import React from "react"
import "./FilterExpense.css"

type onChangeFilter = {
    onChangeFilter?:any
    yearSelected?:any
}

const FilterExpense:React.FC<onChangeFilter> = (props) => {

    const dropdownChangeHandler = (event:any) => {
        // console.log(event.target.value)
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.yearSelected} onChange={dropdownChangeHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
            </div>
        </div>
    )
}

export default FilterExpense