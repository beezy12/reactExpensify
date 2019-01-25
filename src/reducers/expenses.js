




// ********************************************************************************************* //
// break up the app into multiple reducers.
// use a single reducer for each single property in the redux store (expenses, filters).
// each one will act like the other doesn't exist

// ***** EXPENSES REDUCER **********
// state starts out as an empty array if there are no expenses
// SPREAD OPERATOR -> ...state is the array of the 3 original things, I can then add action.expense and it
// ...it just adds it to the end of the array. this does the same thing as array.concat

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_EXPENSE':
      // console.log('yooo', action.expense)
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      //console.log('what does state look like', state)
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

export default expensesReducer;