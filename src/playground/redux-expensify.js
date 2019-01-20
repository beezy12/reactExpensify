import { createStore, combineReducers } from 'redux';

// ************* ACTIONS ************//
// ADD_EXPENSE
// REMOVE_EXPENSE
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
const expensesRedducerDefaultState = [];
const expensesReducer = (state = expensesRedducerDefaultState, action) => {
  switch (action.type) {
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
console.log(store.getState());




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