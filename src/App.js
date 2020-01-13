import React from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import User from './User';

function App() {
  const user = {
    id: 1,
    username: 'velopert'
  };

  return(
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  )
}

export default App;
