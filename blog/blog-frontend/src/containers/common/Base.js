import React, { Component } from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class Base extends Component {
  initialize = async () => {
    const { BaseActions } = this.props;
    if (localStorage.logged === "true") {
      BaseActions.tempLogin();
    }
    try {
      await BaseActions.checkLogin();
    } catch(e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <div>
        <LoginModalContainer/>
        {/* 전역적으로 사용하는 v커모넌트들이 있다면 여기에서 렌더링 합니다. 헤더랑 footer는요?*/}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    logged: state.base.logged
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);