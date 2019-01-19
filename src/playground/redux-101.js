import { createStore } from 'redux';

// creating a store. it needs at least one argument, which is a function that gets called right away.
// the second argument is the action object
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: state.count = 0
      };
    default:
      return state;
  }
});

// this is how you listen to changes to the redux store
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// actions - an object that gets sent to the store. this is how you change state in the store
// I'd like to increment the count
// 'type' has to be provided
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

// I'd like to decrement the count
store.dispatch({
  type: 'DECREMENT'
});

// I'd like to reset the count to zero
store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
});