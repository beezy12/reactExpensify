import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// mapping explaination here:
// if I passed an expense prop to ExpenseListItem like expense={expense}, I would've had to call 
// expense.whatever on each item....but by using the spread operator technique here, Im just pulling 
// each item out by name, so in the other file I can just access 'description' or whatever
const ExpenseList = (props) => (
  <div>
    <h1>EXPENSE LIST</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} /> 
    })}
  </div>
);


const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// the argument in the connect function is what from my store do I want this component to have access to.
export default connect(mapStateToProps)(ExpenseList);

