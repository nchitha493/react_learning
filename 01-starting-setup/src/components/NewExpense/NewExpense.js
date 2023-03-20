import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler =(enteredExpenseData) =>{
    const expenseData ={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    console.log(expenseData)
    props.onAddExpense(expenseData)
    setshowAddExpense(false)
  }
  const [showAddExpense,setshowAddExpense] = useState(false)
  const addNewExpense = () =>{
    setshowAddExpense(true)
  }
  const closeAddExpenser = ()=>{
    setshowAddExpense(false)
  }
  return (
    <div className="new-expense">
      {!showAddExpense && <button onClick={addNewExpense}>Add New Expense</button>}
      {showAddExpense && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} closeAddExpense={closeAddExpenser} />}
    </div>
  );
};

export default NewExpense;
