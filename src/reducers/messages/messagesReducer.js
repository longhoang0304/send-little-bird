export const MESSAGE_SEND_MESSAGE = 'messages/SEND_MESSAGE';
export const MESSAGE_SEND_MESSAGE_SUCCESS = 'messages/SEND_MESSAGE_SUCCESS';
export const MESSAGE_SEND_MESSAGE_FAILED = 'messages/SEND_MESSAGE_FAILED';
export const MESSAGE_NEW_MESSAGE = 'messages/NEW_MESSAGE';
export const MESSAGE_FETCH_HISTORY = 'messages/FETCH_HISTORY';
export const MESSAGE_FETCH_HISTORY_SUCCESS = 'messages/FETCH_HISTORY_SUCCESS';
export const MESSAGE_FETCH_HISTORY_FAILED = 'messages/FETCH_HISTORY_FAILED';

const updateNewMessage = (userId, message) => ({
  type: MESSAGE_NEW_MESSAGE,
  userId,
  message,
});

const sendMessage = (userId, message) => ({
  type: MESSAGE_SEND_MESSAGE,
  userId,
  message,
});

const sendMessageSuccess = (userId, message) => ({
  type: MESSAGE_SEND_MESSAGE_SUCCESS,
  userId,
  message,
});

const sendMessageFailed = (userId, errorMsg) => ({
  type: MESSAGE_SEND_MESSAGE_FAILED,
  userId,
  errorMsg,
});

const fetchOldMsg = (userId) => ({
  type: MESSAGE_FETCH_HISTORY,
  userId,
});

const fetchOldMsgSuccess = (userId, messages) => ({
  type: MESSAGE_FETCH_HISTORY_SUCCESS,
  userId,
  messages,
});

const fetchOldMsgFailed = (userId, errorMsg) => ({
  type: MESSAGE_FETCH_HISTORY_FAILED,
  userId,
  errorMsg,
});

export const actions = {
  sendMessage,
  sendMessageSuccess,
  sendMessageFailed,

  updateNewMessage,

  fetchOldMsg,
  fetchOldMsgSuccess,
  fetchOldMsgFailed,
};

// selectors

const getMessageList = ({ messages }) => messages.messages;
const getMessagesByUserId = ({ messages }, userId) => messages.messages[userId] || {};

export const selectors = {
  getMessageList,
  getMessagesByUserId,
};

const initialState = {
  messages: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case MESSAGE_FETCH_HISTORY: {
      const { userId } = action;
      const currentUser = state.messages[userId] || {
        isFetchingHistory: false,
        fetchMsgHistoryError: null,
        history: [],
        lastUpdated: null,
      };
      const newUser = {
        ...currentUser,
        isFetchingHistory: true,
        fetchMsgHistoryError: null,
      }

      return {
        ...state,
        messages: {
          ...state.messages,
          [userId]: newUser,
        } // end messages
      }
    }

    case MESSAGE_FETCH_HISTORY_SUCCESS: {
      const { userId, messages } = action;
      const currentUser = state.messages[userId];
      if (!currentUser) return;
      const newUser = {
        ...currentUser,
        isFetchingHistory: false,
        history: currentUser.history.concat(messages),
      }

      return {
        ...state,
        messages: {
          ...state.messages,
          [userId]: newUser,
        } // end messages
      }
    }

    case MESSAGE_FETCH_HISTORY_FAILED: {
      const { userId, errorMsg } = action;
      const currentUser = state.messages[userId];
      if (!currentUser) return;
      const newUser = {
        ...currentUser,
        isFetchingHistory: false,
        fetchMsgHistoryError: errorMsg,
      }

      return {
        ...state,
        messages: {
          ...state.messages,
          [userId]: newUser,
        } // end messages
      }
    }

    case MESSAGE_NEW_MESSAGE:
    case MESSAGE_SEND_MESSAGE_SUCCESS: {
      const { userId, message } = action;
      const currentUser = state.messages[userId];
      if (!currentUser) return;
      const newUser = {
        ...currentUser,
        history: [message, ...currentUser.history],
      }

      return {
        ...state,
        messages: {
          ...state.messages,
          [userId]: newUser,
        } // end messages
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;
