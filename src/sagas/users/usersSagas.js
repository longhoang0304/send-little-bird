import {
  all, call,
  put,
  takeLeading,
} from 'redux-saga/effects';
import {
  USERS_FETCH,
  actions as UsersActions
} from '../../reducers/users';
import sb, { sendBirdPromisify } from '../../utils/sendbird';

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

export default function* () {
  yield all([
    takeLeading(USERS_FETCH, handleFetchUserList),
  ]);
}
