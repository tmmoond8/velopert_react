import { handleActions, createAction } from 'redux-actions';

const SET_INPUT = 'input/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initialState = {
    value: ''
};

export default handleActions({
    [SET_INPUT]: (state, action) => {
        return {
            value: action.payload
        }
    }
}, initialState);