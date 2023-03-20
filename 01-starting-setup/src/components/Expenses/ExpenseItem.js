import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import React,{useState} from "react";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date}/>
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price">${props.item.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
