// import logo from './logo.svg';
import React from 'react'
import './App.css';
import ExpenseItems  from './Components/Expenses/ExpenseItem';


const App =()=>{

  let expenses = [
    {title :'Food' ,amount:'$25' ,locationOfExpenditure:'Restaurant', date :new Date()  },
    {title:'Car' , amount: '$50000' ,locationOfExpenditure:'NK', date :new Date()},
    { title:'Shopping' , amount:'$4000' , locationOfExpenditure:'Mall' ,date :new Date()}
  ];

  return (
    <div className="App">
    <h2>Let's get started!</h2>
  
    {expenses.map((expense , index)=>(
  <ExpenseItems key={index}
  date={expense.date}
   title={expense.title}
   amount={expense.amount}
   
   locationOfExpenditure={expense.locationOfExpenditure}
  >
  </ExpenseItems>
    ))}
  
    </div>
  );

}

export default App;




