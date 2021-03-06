import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
//if persist start
import {store} from './store/store'
//if persist End

//If not persist start
// import thunk from 'redux-thunk';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import reducer from './store/reducers';
// const store = createStore(reducer, applyMiddleware(thunk));
//If not persist End

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
