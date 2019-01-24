import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>ADD EXPENSE</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        //console.log(expense);
        props.dispatch(addExpense(expense));   // ADDING EXPENSE TO STORE
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);