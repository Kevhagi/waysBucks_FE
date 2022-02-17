import React from 'react';
import ReactDOM from 'react-dom';

import { UserContextProvider } from "./context/userContext";

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

