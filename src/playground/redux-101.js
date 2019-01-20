import { createStore } from 'redux';


// ACTION GENERATORS - functions that return action objects
// when just returning objects, you can use this syntax with parentheses
// MORE IMPORTANTLY, Im using destructuring here to just pull off incrementBy
// (hint: incrementBy here is set to 5 from way down below, otherwise it gets set to 1)
// IF IT DOESNT EXIST....it gets set to an empty object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count: count
});





//********************* REDUCERS HERE **************************************************************//
// -REDUCERS determine what to do off of an action. it's how we change the state.
// -REDUCERS are pure functions...meaning functions that solely depend upon the input (and not global vars).
// ....they compute the new state based off of the old state and the action that were both passed in.
// -you don't want to mutate state or action, just returning an object that represents the new state.
// ...changing state directly will have unintended consequences.

// creating a store. it needs at least one argument, which is a function that gets called right away.
// the second argument is the action object
// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + action.incrementBy
//       };
//     case 'DECREMENT':
//       return {
//         count: state.count - action.decrementBy
//       };
//     case 'SET':
//       return {
//         count: action.count
//       };
//     case 'RESET':
//       return {
//         count: state.count = 0
//       };
//     default:
//       return state;
//   }
// });


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
};

const store = createStore(countReducer);


// ********************************************************************************************//

// this is how you listen to changes to the redux store
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// actions - an object that gets sent to the store. this is how you change state in the store
// I'd like to increment the count
// 'type' has to be provided
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

// I'd like to decrement the count
store.dispatch(decrementCount());

// I'd like to reset the count to zero
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 250 }));