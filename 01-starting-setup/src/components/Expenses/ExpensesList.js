import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    if (props.items.length === 0) 
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;

    return (
        <ul className="expenses-list">
            <li>{props.items.map((expense)=>(<ExpenseItem item={expense} key={expense.id} />))}</li>
        </ul>
    );
}

export default ExpensesList;
