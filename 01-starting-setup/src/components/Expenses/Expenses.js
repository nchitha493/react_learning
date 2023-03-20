import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear)=>{
      setFilteredYear(selectedYear)
      console.log(selectedYear)
    }
    const filteredExpenses = props.items.filter((expense)=>{
      return expense.date.getFullYear() == filteredYear
    })
    return (
        <div>
          <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
          </Card>
        </div>
    );
}

export default Expenses;
