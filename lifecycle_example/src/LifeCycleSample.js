import React, { Component } from 'react';

class LifeCyCleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  getDerivedStateFromState(nextProps, prevState) {
    if(nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldCOmponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링 하지 않는다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if(snapShot) {
      console.log('업데이트 되기 직전 색상', snapShot);
    }
  }

  render() {
    const style = {
      color: this.props.color
    }

    return (
      <div className="LifeCyCleSample">
        <h1 style={style} ref={ref => this.myRef = ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>
          더하기
        </button>
      </div>
    );
  }
}

export default LifeCyCleSample;
