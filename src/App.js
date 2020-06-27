/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-cycle */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import './utils/sendbird';
import history from './utils/history';
import Routes from './pages';
import configureStore from './store';


const { store, persistor } = configureStore({}, history);

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes history={history} />
          </ConnectedRouter>
        </Provider>
      </>
    );
  }
}
