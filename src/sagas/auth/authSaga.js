import {
  all, call,
  put,
  takeLeading,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  AUTH_LOGIN,
  actions as AuthActions
} from '../../reducers/auth';
import sb, { sendBirdPromisify } from '../../utils/sendbird';

export function* handleLogin({ username }) {
  const trimUsername = username.trim();
  if (!trimUsername) return;
  try {
    const user = yield call(sendBirdPromisify, sb.connect.bind(sb), trimUsername);
    yield put(AuthActions.loginSuccess(user))
    yield put(push('/channels-list'))
  } catch (error) {
    yield put(AuthActions.loginFailed(error.message));
  }
}

export default function* () {
  yield all([
    takeLeading(AUTH_LOGIN, handleLogin),
  ]);
}
