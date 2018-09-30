import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';
const MODIFY_POST = 'editor/MODIFY_POST';
const GET_POST = 'editor/GET_POST';

// acition creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const writePost = createAction(WRITE_POST, api.writePost);
export const modifyPost = createAction(MODIFY_POST, api.modifyPost);
export const getPost = createAction(GET_POST, api.getPost);

// initial state
const initialState = {
  title: '',
  markdown: '',
  tags: '',
  postId: null
};

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState, 
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return {
      ...state,
      [name]: value
    }
  },
  ...pender({
    type: WRITE_POST,
    onSuccess: (state, action) => {
      const { _id } = action.payload.data;
      return {
        ...state,
        postId: _id
      }
    }
  }),
  ...pender({
    type: MODIFY_POST,
    onSuccess: (state, action) => {
      const { _id } = action.payload.data;
      console.log('modify', action.payload.data);
      return {
        ...state,
        postId: _id
      }
    }
  }),
  ...pender({
    type: GET_POST,
    onSuccess: (state, action) => {
      const { title, tags, body } = action.payload.data;
      return {
        ...state,
        title,
        markdown: body,
        tags: tags.join(',')
      }
    }
  })
}, initialState)