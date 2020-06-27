import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
// import reducer here
import auth from './auth';
import users from './users';
import channels from './channels';
import messages from './messages';

const rootReducer = (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    auth,
    users,
    channels,
    messages,
  });

  return appReducer
};

export default rootReducer;
