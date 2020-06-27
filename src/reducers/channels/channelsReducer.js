export const CHANNELS_CREATE_CHANNEL = 'channels/CREATE_CHANNEL';
export const CHANNELS_CREATE_CHANNEL_SUCCESS = 'channels/CREATE_CHANNEL_SUCCESS';
export const CHANNELS_CREATE_CHANNEL_FAILED = 'channels/CREATE_CHANNEL_FAILED';

const createChannel = (userId) => ({
  type: CHANNELS_CREATE_CHANNEL,
  userId,
});

const createChannelSuccess = (userId, channel, oldMessageQuery) => ({
  type: CHANNELS_CREATE_CHANNEL_SUCCESS,
  userId,
  channel,
  oldMessageQuery,
});

const createChannelFailed = (errorMsg) => ({
  type: CHANNELS_CREATE_CHANNEL_FAILED,
  errorMsg,
});

export const actions = {
  createChannel,
  createChannelSuccess,
  createChannelFailed,
};

// selectors

const getChannelList = ({ channels }) => channels.channelList;
const getChannelByUserId = ({ channels }, userId) => channels.channelList[userId];

export const selectors = {
  getChannelList,
  getChannelByUserId,
};

const initialState = {
  channelList: {},
  isCreatingChannel: false,
  creatingChannelError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANNELS_CREATE_CHANNEL: {
      return {
        ...state,
        isCreatingChannel: true,
        creatingChannelError: null,
      }
    }

    case CHANNELS_CREATE_CHANNEL_SUCCESS: {
      const { userId, channel, oldMessageQuery } = action;
      return {
        ...state,
        channelList: {
          ...state.channelList,
          [userId]: {
            channel,
            oldMessageQuery,
          }
        },
        isCreatingChannel: false,
      }
    }

    case CHANNELS_CREATE_CHANNEL_FAILED: {
      const { errorMsg } = action;
      return {
        ...state,
        isCreatingChannel: false,
        creatingChannelError: errorMsg,
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;
