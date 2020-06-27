import {
  all
} from 'redux-saga/effects';
import '../utils/axiosClient';
import authSaga from './auth';
import usersSaga from './users';
import channelsSaga from './channels';
import messagesSaga from './messages';

export default function* rootSaga() {
  yield all([
    authSaga(),
    usersSaga(),
    channelsSaga(),
    messagesSaga(),
  ]);
}
