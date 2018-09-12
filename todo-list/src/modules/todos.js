import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = [
    {
        id: 0,
        text: '리액트 공부하기',
        done: true
    },
    {
        id: 1,
        text: '리액트 스타일링 하기',
        done: false
    },
];

export default handleActions({
    [INSERT]: (state, action) => {
        return state.concat(action.payload);
    },
    [TOGGLE]: (state, action) => {
        return state.map((item, index) => {
            if(index === action.payload) {
                return { ...item, done: !item.done}
            }
            return item;
        })
    },
    [REMOVE]: (state, action) => {
        return state.filter((item, index) => index !== action.payload);
    }
}, initialState)