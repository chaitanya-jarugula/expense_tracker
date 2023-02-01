import React, { useState } from 'react';

//import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense=>{return expense.date.getFullYear().toString()===filteredYear});

  return (
    <li>
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}> </ExpensesList>
       <ExpenseChart expenses = {filteredExpenses}>
      </ExpenseChart> 
      </Card>
    </div>
    </li>
  );
};

export default Expenses;