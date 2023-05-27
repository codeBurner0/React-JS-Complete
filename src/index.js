import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
import DRouting from './Routing/Dynamic routing/DRouting';
// import Routing from './Routing/Routing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <center><App /></center> */}
  
  <Router><DRouting/></Router>
  
  </React.StrictMode>
);
reportWebVitals();
