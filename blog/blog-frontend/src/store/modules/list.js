import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action types
const GET_POST_LIST = 'list/GET_POST_LIST';

// acition creators
export const getPostList = createAction(GET_POST_LIST, api.getPostList, meta => meta);

// initial state
const initialState = {
  posts: [],
  lastPage: null
}

// reducer

export default handleActions({
  ...pender({
    type: GET_POST_LIST,
    onSuccess: (state, action) => {
      const { data: posts } = action.payload;
      const lastPage = action.payload.headers['last-page'];
      return {
        ...state,
        posts,
        lastPage: parseInt(lastPage, 10)
      }
    }
  })
}, initialState)