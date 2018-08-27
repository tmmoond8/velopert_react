import React, { Component } from 'react';
import styles from './App.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

console.log(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div className={cx('box', { blue: isBlue })}>

      </div>
    );
  }
}

export default App;
