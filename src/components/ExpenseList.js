import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>EXPENSE LIST</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);


const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

// the argument in the connect function is what from my store do I want this component to have access to.
export default connect(mapStateToProps)(ExpenseList);

