import React, { Component } from 'react';

export default function asyncComponet(getComponent) {
  class AsyncComponet extends Component {
    static Component = null;

    static getComponent = () => {
      return getComponent().then(({ default: Component }) => {
        AsyncComponet.Component = Component;
      });
    }

    state = { Component: AsyncComponet.Component };

    constructor(props) {
      super(props);
      if (AsyncComponet.Component) return;
      getComponent().then(({ default: Component }) => {
        AsyncComponet.Component = Component;
        this.setState({ Component });
      });
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component { ...this.props } />
      }
      return null;
    }
  }  

  return AsyncComponet;
}