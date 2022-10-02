import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { searchReducer } from './redux/reducer/universityReducer';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(searchReducer, applyMiddleware(thunk))

root.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>
);
