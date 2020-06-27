/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history = {}) {
  const historyMiddleware = routerMiddleware(history);

  const composeEnhancers = composeWithDevTools({});
  const devToolMiddleware = composeEnhancers(
    applyMiddleware(
      historyMiddleware,
      sagaMiddleware,
    ),
  );

  const store = createStore(
    rootReducer(history),
    initialState,
    devToolMiddleware,
  );
  sagaMiddleware.run(rootSaga);

  return { store };
}
