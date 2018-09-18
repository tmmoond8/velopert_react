import { handleActions, createAction } from 'redux-actions';
import { pender, applyPenders } from 'redux-pender';
import axios from 'axios';

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';

export const getPost = createAction(GET_POST, getPostAPI);
export const initialState = {
  data: {
    title: '',
    body: ''
  }
}

const reducer = handleActions({
 // 다른 일반 액션들을 관리...
}, initialState);

export default applyPenders(reducer, [
  {
    type: GET_POST,
    onSuccess: (state, action) => {
      const { title, body } = action.payload.data;
      return {
        data: {
          ...state,
          title,
          body
        }
      }
    },
    onCancel: (state, action) => {
      return {
        data: {
          title: '취소됨',
          body: '취소됨'
        }
      }
    }
  },
  // {
  //   type: GET_SOMETHING,
  //   onSuccess: (state, action) => {}
  // }
])