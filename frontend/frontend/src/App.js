import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import BaseRouter from './routes'
import './App.css';
import { Provider } from 'react-redux';

const App = (props) => {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <BaseRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
