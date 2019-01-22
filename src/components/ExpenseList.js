import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>EXPENSE LIST</h1>
    {props.expenses.length}
  </div>
);

// the argument in the connect function is what from my store do I want this component to have access to.
const ConnectedExpenseList = connect((state) => {
  return {
    expenses: state.expenses
  };
})(ExpenseList);

export default ConnectedExpenseList;