import { createStore } from 'redux';

// creating a store. it needs at least one argument, which is a function that gets called right away.
// the second argument is the action object
const store = createStore((state = { count: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + 1
    };
  } else {
    return state;
  }
});

console.log(store.getState());
// actions - an object that gets sent to the store. this is how you change state in the store

// I'd like to increment the count
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});


// I'd like to decrement the count


// I'd like to reset the count to zero



console.log(store.getState());