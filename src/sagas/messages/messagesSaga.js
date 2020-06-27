import {
  all, call,
  put, select,
  takeEvery,
} from 'redux-saga/effects';
import {
  MESSAGE_FETCH_HISTORY,
  actions as MessagesActions, MESSAGE_SEND_MESSAGE
} from '../../reducers/messages';
import {
  CHANNELS_CREATE_CHANNEL_SUCCESS,
  selectors as ChannelsSelectors,
} from '../../reducers/channels';
import sb, { sendBirdPromisify } from '../../utils/sendbird';
import {selectors as AuthSelectors} from "../../reducers/auth";

export function* handleFetchHistory({ userId: guessUserId }) {
  try {
    const { oldMessageQuery } = yield select(ChannelsSelectors.getChannelByUserId, guessUserId);
    if (!oldMessageQuery.hasMore) {
      return;
    }
    const messages = yield call(sendBirdPromisify, oldMessageQuery.load)

    yield put(MessagesActions.fetchOldMsgSuccess(guessUserId, messages))

  } catch (error) {
    yield put(MessagesActions.fetchOldMsgFailed(guessUserId, error.message));
  }
}

export function handleNewMessageReceivedGenerator(userId) {
  function* handleNewMessageReceived(channel, message) {
    yield put(MessagesActions.updateNewMessage(userId, [message]))
  }

  return handleNewMessageReceived;
}

export function* handleListenForNewMessage({ userId: guessUserId, channel }) {
  channel.onMessageReceived = handleNewMessageReceivedGenerator(guessUserId);
  yield put(MessagesActions.fetchOldMsg(guessUserId));
}

export function* handleSendMessage({ userId: guessUserId, message }) {
  const messageToSend = new sb.UserMessageParams();
  messageToSend.message = message;
  messageToSend.pushNotificationDeliveryOption = 'default';  // Either 'default' or 'suppress'
  const { channel } = yield select(ChannelsSelectors.getChannelByUserId, guessUserId);
  try {
    const sentMessage = yield call(sendBirdPromisify, channel.sendUserMessage.bind(channel), messageToSend);
    yield put(MessagesActions.sendMessageSuccess(guessUserId, sentMessage));
  } catch (error) {
    yield put(MessagesActions.sendMessageFailed(guessUserId, error.message));
  }

}

export default function* () {
  yield all([
    takeEvery(CHANNELS_CREATE_CHANNEL_SUCCESS, handleListenForNewMessage),
    takeEvery(MESSAGE_FETCH_HISTORY, handleFetchHistory),
    takeEvery(MESSAGE_SEND_MESSAGE, handleSendMessage)
  ]);
}
