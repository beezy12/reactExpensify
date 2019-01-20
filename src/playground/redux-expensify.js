import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ************* ACTIONS ************//
// ADD_EXPENSE
const addExpense = (
  { 
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// ********************************************************************************************* //
// break up the app into multiple reducers.
// use a single reducer for each single property in the redux store (expenses, filters).
// each one will act like the other doesn't exist

// ***** EXPENSES REDUCER **********
// state starts out as an empty array if there are no expenses
// SPREAD OPERATOR -> ...state is the array of the 3 original things, I can then add action.expense and it
// ...it just adds it to the end of the array. this does the same thing as array.concat
const expensesRedducerDefaultState = [];
const expensesReducer = (state = expensesRedducerDefaultState, action) => {
  
  switch (action.type) {
    case 'ADD_EXPENSE':
      // console.log('yooo', action.expense)
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
    console.log('what does state look like', state)
      return state.filter(expense => expense.id !== action.id);
    default:
      return state;
  }
};

// ******** FILTERS REDUCER  ************
const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined };
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// ********************************************************************************************* //



// ****** STORE CREATION **********
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
// console.log(store.getState());



// ***** MAKING CHANGES ******************************************************************//
// listening for changes
store.subscribe(() => {
  console.log(store.getState());
});
// dispatching the action
const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300 }));

const removeOne = store.dispatch(removeExpense({ id: expenseOne.expense.id }));





// THIS ISNT USED, WAS JUST AN EXAMPLE ******************************

const demoState = {
  expenses: [{
    id: 'oeuouscg',
    description: 'January Rent',
    note: 'this was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};