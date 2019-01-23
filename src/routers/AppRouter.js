import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

// BrowserRouter needs at least one div to render
// Switch goes through each route, looking for a match. If none are matched, 404 page shows
const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboard} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;

