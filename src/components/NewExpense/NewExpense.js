import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const [formindicator,setFormIndicator] = useState(true);
    const SaveEnteredData = (enteredExpenseData) =>{
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(ExpenseData);
        props.onAddExpense(ExpenseData);
        setFormIndicator(true)
    }
    const formViewHandler = () =>{
        setFormIndicator(false);
    } 
    const homeViewHandler = () =>{
        setFormIndicator(true);
    }
    if(formindicator===true){
        return (<div className="new-expense">
        <button onClick={formViewHandler}>Add New Expense</button>
        </div>)
    }
  return <div className="new-expense">
      <ExpenseForm onSaveChangeData={SaveEnteredData} onCancelForm ={homeViewHandler}></ExpenseForm>
  </div>;
};

export default NewExpense;