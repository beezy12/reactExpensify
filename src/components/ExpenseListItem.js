import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
    <p>{note}</p>
    <p>id here {id}</p>
  </div>
);

// dont have to mapStateToProps here because I just need access to the 'dispatch' prop, which this gives me
export default ExpenseListItem;