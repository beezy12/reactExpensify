import { createStore } from 'redux';

// creating a store. it needs at least one argument, which is a function that gets called right away.
// the second argument is the action object
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: state.count = 0
      }
    default:
      return state;
  }
});

console.log(store.getState());
// actions - an object that gets sent to the store. this is how you change state in the store

// I'd like to increment the count
store.dispatch({
  type: 'INCREMENT'
});

// I'd like to decrement the count
store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

// I'd like to reset the count to zero
store.dispatch({
  type: 'RESET'
});


console.log(store.getState());