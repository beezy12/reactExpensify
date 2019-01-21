import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ************* ACTIONS **********************************//
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
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});


// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE    (startDate is already undefined, no need for a default)
const setStartDate = (startDate) =>({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});




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
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        // if my list of expense IDs in state (expense.id) has an ID matching the ID 
        // that was passed in (action.id), spread out the expense object, and spread out and run 
        // all of the action.updates
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

// ******** FILTERS REDUCER  ************
const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined };
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
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
// const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// // set 'rent' as the text on an expense, overriding the 'text' property. 'text' defaults to empty string
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());   // amount
// store.dispatch(sortByDate());     // date

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(7777));
store.dispatch(setEndDate());


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


// ****************** OBJECT SPREAD OPERATOR PRACTICE **********************//
// have to first add something to babel config...because not everything is ready for object spread yet
// yarn add babel-plugin-transform-object-rest-spread@6.23.0

// const user = {
//   name: 'beez',
//   age: 39
// }


// this is how you add to an object using spread, or overwrite an existing element
// console.log({
//   ...user,
//   location: 'Austin',
//   age: 12
// });