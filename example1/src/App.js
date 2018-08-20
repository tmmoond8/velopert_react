import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    const text = '당신은 어썸하신가요??';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };

    const testText = '깔깔깔깔';

    return (
      <Fragment>
        <div className="my-div">
          {/* {<Abc/>} */}
          <h1> 리액트 안녕!</h1>
          <h2> {text} </h2>
          {
            condition && '이것을 보여주세요'
          }
          <div style={style}
            // 여기에서는 주석을 이렇게 사용할 수 있습니다
            // skdjfljlfksaslda
            // sdflsjsa
          />
          <MyComponent/>
        </div>
      </Fragment>
    );
  }
}

export default App;
