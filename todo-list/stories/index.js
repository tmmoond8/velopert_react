import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoItem from '../src/components/TodoItem';

const id = 12;
const done = true;
const children = '주말에 놀러가기';
const onToggle = () => {};
const onRemove = () => {};



storiesOf('TodoItem', module)
  .add('text done', () => (
    <TodoItem 
        id={id} 
        done={done} 
        onToggle={onToggle} 
        onRemove={onRemove}
    >
        {children}
    </TodoItem>
  ))
  .add('text todo', () => (
    <TodoItem 
        id={id} 
        done={false} 
        onToggle={onToggle} 
        onRemove={onRemove}
    >
        {'쓰고 싶은 내용을 맘껏 씁시다.'}
    </TodoItem>
  ))