import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
// import reducer here
import auth from './auth';
import users from './users';

const rootReducer = (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    auth,
    users,
  });

  return appReducer
};

export default rootReducer;
