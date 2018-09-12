import React, { Component } from 'react';
import styles from './TodoList.scss';
import className from 'classnames/bind';
import TodoItem from '../TodoItem';

const cx = className.bind(styles);

class TodoList extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.todos !== nextProps.todos;
  // }
  render() {
    const { todos, onToggle, onRemove } = this.props;
    return (
      <div>
        {todos && todos.map((todo) => {
          return (
            <TodoItem 
              id={todo.id} 
              done={todo.done} 
              onToggle={onToggle} 
              onRemove={onRemove}
              key={todo.id}
              >{todo.text}
            </TodoItem>
          )
        })}
      </div>
    )
  }
}

export default TodoList;