import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Signup from './components/Signup';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
);
