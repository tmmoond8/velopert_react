import { createAction, handleActions } from 'redux-actions';
import * as api from 'lib/api';

import { pender } from 'redux-pender';

// action types
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

const LOGIN = 'base/LOGIN';
const LOGOUT = 'base/LOGOUT';
const CHECK_LOGIN = 'base/CHECK_LOGIN';
const CHANGE_PASSWORD_INPUT = 'base/CHANGE_PASSWORD_INPUT';
const INITIALIZE_LOGIN_MODAL = 'base/INITIALIZE_LOGIN_MODAL';

// acition creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

export const login = createAction(LOGIN, api.login);;
export const logout = createAction(LOGOUT, api.logout);
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);

// initial state
const initialState = { 
  modal: {
    removePost: false,
    login: false
  },
  loginModal: {
    password: '',
    error: false
  },
  logged: false
};

// reducer
export default handleActions({
  [SHOW_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return {
      ...state,
      modal: {[modalName]: true}
    };
  },
  [HIDE_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return {
      ...state,
      modal: {[modalName]: false}
    }
  },
  ...pender({
    type: LOGIN,
    onSuccess: (state, action) => {
      const { success } = action;
      return {
        ...state,
        logged: success
      }
    },
    onError: (state, action) => {
      return {
        ...state,
        loginModal: {
          ...state.loginModal,
          error: true,
          password: ''
        },
        logged: false
      }
    }
  }),
  ...pender({
    type: CHECK_LOGIN,
    onSuccess: (state, action) => {
      const { logged } = action.payload.data;
      return {
        ...state,
        logged: logged
      }
    }
  }),
  [CHANGE_PASSWORD_INPUT]: (state, action) => {
    const { payload: value } = action;
    return {
      ...state,
      loginModal: {
        ...state.loginModal,
        password: value
      }
    }
  },
  [INITIALIZE_LOGIN_MODAL]: (state, action) => {
    return {
      ...state,
      loginModal: initialState.loginModal
    }
  }
}, initialState)