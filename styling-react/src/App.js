import React, { Component } from 'react';
import styles from './App.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

console.log(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div className={cx('box', { blue: isBlue })}>
        <div className={cx('box-inside')}/>
      </div>
    );
  }
}

export default App;
