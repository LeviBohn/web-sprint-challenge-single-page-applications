//   ✓ running react router V6 (3 ms)
//   ✕ Homepage at "/" route, has link or button with #order-pizza (136 ms)
//   ✕ From homepage "/" route, click #order-pizza, navigate to "/pizza" route (12 ms)
//   ✕ The "/pizza" route has a form with #pizza-form (11 ms)
//   ✕ Form has name text input with #name-input (9 ms)
//   ✕ Form has validation for #name-input with error message "name must be at least 2 characters" (16 ms)
//   ✕ Form has pizza size dropdown with #size-dropdown (17 ms)
//   ✕ Form has toppings checklist with at least 4 options (12 ms)
//   ✕ Form has special instructions input with #special-text (9 ms)
//   ✕ Fill out #pizza-form, submit #pizza-form with data to https://reqres.in/api/orders (10 ms)

import App from './App';
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
















//import React from 'react';
// import ReactDOM from 'react-dom';

// import App from "./App";

// import { BrowserRouter } from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );