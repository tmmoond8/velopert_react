import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initailTodos = new Array(1).fill(0).map(
  (foo, index) => ({id: index, text: `일정 ${foo}`, done: false})
);

class App extends Component {
  state = {
    input: '',
    todos: initailTodos
  }
  id = 2;

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  handleInsert = () => {
    const { input, todos } = this.state;
    const newTodo = {
      id: this.id++,
      done: false,
      text: input
    };
    this.setState({
      input: '',
      todos: [...todos, newTodo]
    })
  }

  handleToggle = (id) => {
    console.log(`toggle ${id}`);
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => {
        if(todo.id === id) {
          todo = { ...todo, done: !todo.done }
        }
        return todo;
      })
    })
  }

  handleRemove = (id) => {
    console.log(`remove ${id}`);
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove} = this;
    return (
     <PageTemplate>
       <TodoInput onChange={handleChange} value={input} onInsert={handleInsert}/>
       <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
     </PageTemplate>
    );
  }
}

export default App;
