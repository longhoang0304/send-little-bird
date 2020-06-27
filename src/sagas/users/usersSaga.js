import { eventChannel } from 'redux-saga';
import {
  all, call,
  put, takeEvery,
  takeLeading,
  takeLatest,
} from 'redux-saga/effects';
import {
  USERS_FETCH,
  actions as UsersActions
} from '../../reducers/users';
import sb, { sendBirdPromisify } from '../../utils/sendbird';
import { AUTH_LOGIN_SUCCESS } from '../../reducers/auth';

export function* handleFetchUserList() {
  try {
    const userListQuery = sb.createApplicationUserListQuery();
    userListQuery.limit = 100;
    let users = [];
    while (userListQuery.hasNext) {
      const userList = yield call(sendBirdPromisify, userListQuery.next.bind(userListQuery));
      users = users.concat(userList)
    }
    yield put(UsersActions.fetchSuccess(users))
  } catch (error) {
    yield put(UsersActions.fetchFailed(error.message));
  }
}

export function* handleNewUsersAdded({ users }) {
  console.log(users);
}

export function createChannelToListenForNewUsers() {
  return eventChannel(dispatch => {
    const userHandler = new sb.UserEventHandler();

    userHandler.onFriendsDiscovered = function(users) {
      dispatch({ users })
    }
    sb.addUserEventHandler("USER_EVENT_CHANNEL", userHandler); //
    return () => {
      sb.removeUserEventHandler("USER_EVENT_CHANNEL");
    }
  })
}

export function* handleListenNewUser() {
  yield takeEvery(createChannelToListenForNewUsers(), handleNewUsersAdded)
}

export default function* () {
  yield all([
    takeLatest(AUTH_LOGIN_SUCCESS, handleListenNewUser),
    takeLeading(USERS_FETCH, handleFetchUserList),
  ]);
}
