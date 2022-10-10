import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

