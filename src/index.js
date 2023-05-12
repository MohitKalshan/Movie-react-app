import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import './index.css';
import App from './components/App';
import movies from './reducers/index'

const store = createStore(movies);
// const store = configureStore(movies);
console.log(store);
// console.log('Before state: ' , store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'superman'}]
// });

// console.log('After state: ' , store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
