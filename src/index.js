import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom' for older versions
import App from './App';
import './index.css'; // If you have any global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);