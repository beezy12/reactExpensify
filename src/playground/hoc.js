// Higher Order Component (HOC) -> a component that renders another component
// goals of using HOC pattern:
//- to reuse code
//- render hijacking
//- prop manipulation
//- abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// this is how you make a Higher Order Component ********************************
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>YOU ARE NOT ALLOWED. LOG IN</p>
      )}
    </div>
  );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
 
// change this boolean from true to false and back to see the messages change
ReactDOM.render(<AuthInfo isAuthenticated={false} info="THIS INFO IS CLASSIFIED!!!" />, document.getElementById('app'));