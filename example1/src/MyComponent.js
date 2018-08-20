import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  static defaultProps = {
    name: 'no no no no no'
  }
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        나의 새롭고 멋진 컴포넌트
        {this.props.name}
        숫자 {this.state.number}
        <button onClick={() => {
          this.setState({
            number: this.state.number + 1
          })
        }}>버튼 </button>
      </div>
    );
  }
}

export default MyComponent;