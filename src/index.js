import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App/index';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './Store';
// import loadInitialState from './Store/middleware/localStorageMiddleware/loadInitialState';
import GlobalStyles from '../src/Style/globals'



// let { testFunction } = setGlobalStyles;
// this.testFunction = testFunction.bind(this);

const renderApp = () => {
  const initialState = [];
  const store = configureStore(initialState);
  if (process.env.NODE_ENV !== 'production') {
    console.log('Initial state ->');
    console.log(store.getState());
  }


  ReactDOM.render(
    <Provider store={store}>
      <div>
        <GlobalStyles/>
        <App />
      </div>
    </Provider>,
    document.getElementById('root'),
  );
};

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
