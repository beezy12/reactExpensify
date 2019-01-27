import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    //console.log(expense);

    // added the onSubmit for unit testing
    // props.dispatch(addExpense(expense));   // ADDING EXPENSE TO STORE
    this.props.onSubmit(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>ADD EXPENSE</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>     
    );
  }
}

// set all this up for unit testing
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (expense) => dispatch(addExpense(expense))
  };
};

// added undefined instead of mapStateToProps for the unit test
export default connect(undefined, mapDispatchToProps)(AddExpensePage);