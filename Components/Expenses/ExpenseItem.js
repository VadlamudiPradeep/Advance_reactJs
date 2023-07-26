
import React, { useState } from 'react';

import ExpenseDate  from './ExpenseDate.js'
import './ExpenseItem.css'
import Card from '../UI/Card';



let ExpenseItem = (props)=>{
   const [title , setTitle] =  useState(props.title);
//let title =  props.title;
const [amount , setAmount]  = useState(props.amount)
    var clickHandler = ()=>{
        console.log('Deleting expenses: ' , title)
    setTitle('Deleted');

      };
  const ClickHandlerAddExpenses=()=>{
    setAmount('$100')
  }
  
    return (
        <div>
        <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <p>Location: {props.locationOfExpenditure}</p>
      <h2>{title}</h2>
      <div className="expense-item__price">{amount}</div>
    </div>
    <button onClick={clickHandler}>Delete Expense</button>
    <button onClick={ClickHandlerAddExpenses}>Add Expenses</button>
  </Card>
  </div>


    )
};
export default ExpenseItem