import React, { Component } from 'react';
import styles from './TodoList.scss';
import className from 'classnames/bind';
import TodoItem from '../TodoItem';

const cx = className.bind(styles);

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem done>리액트 공부하기</TodoItem>
        <TodoItem>리액트 스타일링 하기</TodoItem>
      </div>
    )
  }
}

export default TodoList;