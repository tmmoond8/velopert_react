import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {

    id = 2;
    getId = () => {
        return this.id++
    }

    handleChange = (e) => {
        const { value } = e.target;
        const { InputActions } = this.props;
        InputActions.setInput(value);
    }

    handleInsert = () => {
        const { InputActions, TodosActions, value } = this.props;
        const todo = {
            id: this.getId(),
            text: value,
            done: false
        };
        TodosActions.insert(todo);
        InputActions.setInput('');
    }

    render() {
        const { handleInsert, handleChange } = this;
        const { value } = this.props;
        return (
            <TodoInput value={value} onChange={handleChange} onInsert={handleInsert}/>
        );
    }
}

export default connect(
    (state) => ({
        value: state.input.value
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);