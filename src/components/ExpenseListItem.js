import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt, note }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <p>{note}</p>
    <p>id here {id}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>REMOVE EXPENSE</button>
  </div>
);

// dont have to mapStateToProps here because I just need access to the 'dispatch' prop, which this gives me
export default connect()(ExpenseListItem);