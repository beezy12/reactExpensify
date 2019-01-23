import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt, note }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <p>{note}</p>
  </div>
);

export default ExpenseListItem;