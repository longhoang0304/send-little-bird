import {
  all
} from 'redux-saga/effects';
import '../utils/axiosClient';
import authSaga from './auth';
import usersSaga from './users';

export default function* rootSaga() {
  yield all([
    authSaga(),
    usersSaga(),
  ]);
}
