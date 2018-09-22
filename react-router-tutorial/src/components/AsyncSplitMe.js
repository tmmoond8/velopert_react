import React, { Component } from 'react';
import SplitMe from 'components/SplitMe';

class AsyncSplitMe extends Component {
  state = {
    SplitMe: null
  }

  loadSplitMe = () => {
    import('./SplitMe').then(({ default: SpiltMe}) => {
      this.setState({
        SplitMe
      });
    });
  }

  render() {
    const { SplitMe } = this.state;
    return SplitMe ? <SplitMe/> : <button onClick={this.loadSplitMe}>SplitMe 로딩</button>
  }
}

export default AsyncSplitMe;