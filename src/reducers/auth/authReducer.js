export const AUTH_LOGIN = 'auth/LOGIN';
export const AUTH_LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED = 'auth/LOGIN_FAILED';

const login = (username) => ({
  type: AUTH_LOGIN,
  username,
});

const loginSuccess = (user) => ({
  type: AUTH_LOGIN_SUCCESS,
  user
});

const loginFailed = (errorMsg) => ({
  type: AUTH_LOGIN_FAILED,
  errorMsg,
});

export const actions = {
  login,
  loginSuccess,
  loginFailed,
};

// selectors

const getUser = ({ auth }) => auth.user;
const getAuthenticated = ({ auth }) => auth.isLoggedIn;

export const selectors = {
  getUser,
  getAuthenticated,
};

const initialState = {
  user: null,
  isLoggingIn: false,
  loginError: null,
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        loginError: null,
      }
    }

    case AUTH_LOGIN_SUCCESS: {
      const { user } = action;
      return {
        ...state,
        user,
        isLoggingIn: false,
        isLoggedIn: true,
      }
    }

    case AUTH_LOGIN_FAILED: {
      const { errorMsg } = action;
      return {
        ...state,
        isLoggingIn: false,
        loginError: errorMsg,
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;
