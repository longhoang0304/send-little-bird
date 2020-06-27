export const USERS_FETCH = 'users/FETCH';
export const USERS_FETCH_SUCCESS = 'users/FETCH_SUCCESS';
export const USERS_FETCH_FAILED = 'users/FETCH_FAILED';

const fetch = () => ({
  type: USERS_FETCH,
});

const fetchSuccess = (userList) => ({
  type: USERS_FETCH_SUCCESS,
  userList
});

const fetchFailed = (errorMsg) => ({
  type: USERS_FETCH_FAILED,
  errorMsg,
});

export const actions = {
  fetch,
  fetchSuccess,
  fetchFailed,
};

// selectors

const getUserList = ({ users }) => users.userList;
const getUserByUserId = ({ users }, userId) => users.userList.find(user => user.userId === userId);

export const selectors = {
  getUserList,
  getUserByUserId,
};

const initialState = {
  userList: [],
  isFetching: false,
  fetchError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case USERS_FETCH: {
      return {
        ...state,
        isFetching: true,
        fetchError: null,
      }
    }

    case USERS_FETCH_SUCCESS: {
      const { userList } = action;
      return {
        ...state,
        userList,
        isFetching: false,
      }
    }

    case USERS_FETCH_FAILED: {
      const { errorMsg } = action;
      return {
        ...state,
        isFetching: false,
        fetchError: errorMsg,
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;
