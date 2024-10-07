// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/Store.js';
import { Provider } from 'react-redux';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = `${import.meta.env.VITE_API_KEY}`;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <Toaster position="bottom-right" reverseOrder={false} />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
