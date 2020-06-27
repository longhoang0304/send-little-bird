import {
  all, call,
  put, select,
  takeEvery,
} from 'redux-saga/effects';
import {
  CHANNELS_CREATE_CHANNEL,
  actions as ChannelsActions
} from '../../reducers/channels';
import {
  selectors as AuthSelectors
} from '../../reducers/auth';
import sb, { sendBirdPromisify } from '../../utils/sendbird';

export function* handleCreateNewChannel({ userId: guessUserId }) {
  try {
    // This one is OK too. const currentUser = sb.currentUser;
    // But I prefer the redux one since it can be persisted to local storage
    const currentUser = yield select(AuthSelectors.getUser);
    const participants = [currentUser.userId, guessUserId].sort();
    const groupChannel = yield call(
      sendBirdPromisify,
      sb.GroupChannel.createChannelWithUserIds.bind(sb.GroupChannel),
      participants,
      true, // should return old channel if participants list has already created the channel before
      `Conversation: ${currentUser.userId}-${guessUserId}`, // channel name
      null, // cover image
      null, // additional data
    )
    const prevMessageListQuery = groupChannel.createPreviousMessageListQuery();
    prevMessageListQuery.limit = 100;
    prevMessageListQuery.reverse = true;
    prevMessageListQuery.load = prevMessageListQuery.load.bind(prevMessageListQuery)

    yield put(ChannelsActions.createChannelSuccess(guessUserId, groupChannel, prevMessageListQuery))
  } catch (error) {
    yield put(ChannelsActions.createChannelFailed(guessUserId, error.message));
  }
}

export default function* () {
  yield all([
    takeEvery(CHANNELS_CREATE_CHANNEL, handleCreateNewChannel),
  ]);
}
