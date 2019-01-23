import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import * as expenseActions from './actions/expenses';
import * as filterActions from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// dispatch actions to the store
store.dispatch(expenseActions.addExpense({ description: 'Water bill', note: 'this was late', amount: 5000 }));
store.dispatch(expenseActions.addExpense({ description: 'Gas bill', note: 'on time', createdAt: 1000 }));
store.dispatch(expenseActions.addExpense({ description: 'car payment', note: 'this was late', amount: 666600000 }));
// store.dispatch(filterActions.setTextFilter('bill'));   // this returns two bills
// store.dispatch(filterActions.setTextFilter('water'));    // ....but this returns only one

// setTimeout(() => {
//   store.dispatch(filterActions.setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


console.log(store.getState());

// IMPORTANT - this is how you connect react to redux. wrap the app with Provider tags.
// AppRouter used to be in the ReactDOM.render()
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));







