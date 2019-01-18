import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
  <div>
    this is my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    editing an expense up in here component
  </div>
);

const HelpPage = () => (
  <div>
    help page
  </div>
);

const NotFoundPage = () => (
  <div>
    404!
  </div>
);
 
// Switch goes through each route, looking for a match. If none are matched, 404 page shows
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));







