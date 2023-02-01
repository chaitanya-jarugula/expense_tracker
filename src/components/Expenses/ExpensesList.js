import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) =>{
    if(props.items.length===0){
        return <h2 className='expenses-List__fallback'>No Expenses found</h2>
    }
    return(
        <ul className='expenses-List'> 
       {props.items.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      </ul>
    );
};
export default ExpensesList;