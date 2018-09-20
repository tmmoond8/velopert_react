import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Post } from 'pages';
import Menu from 'components/Menu';

const App = () => {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home}/>
      <Route path="/about/:name" component={About}/>
      <Route path="/post/:id" component={Post}/>
    </div>
  );
}

export default App;
