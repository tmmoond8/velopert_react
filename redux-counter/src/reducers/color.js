import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0
};

const color = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_COLOR:
        return {
            color: action.color
        }
        default:
            return state;
    }
}

export default color;