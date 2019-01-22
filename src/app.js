import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import * as expenseActions from './actions/expenses';
import * as filterActions from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// dispatch actions to the store
store.dispatch(expenseActions.addExpense({ description: 'Water bill', note: 'this was late', amount: 500000, createdAt: 30000022323 }));
store.dispatch(expenseActions.addExpense({ description: 'Gas bill', amount: 4000000, note: 'on time' }));
//store.dispatch(filterActions.setTextFilter('bill'));   // this returns two bills
store.dispatch(filterActions.setTextFilter('water'));    // ....but this returns only one

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));







