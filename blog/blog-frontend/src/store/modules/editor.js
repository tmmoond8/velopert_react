import { createAction, handleActions } from 'redux-actions';

import { pender } from 'redux-pender';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';

// acition creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);

// initial state

const initialState = {
  title: '',
  markdown: '',
  tags: ''
};

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialize, 
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return {
      ...state,
      [name]: value
    }
  }
}, initialState)