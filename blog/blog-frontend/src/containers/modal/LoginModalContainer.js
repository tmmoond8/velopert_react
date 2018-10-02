import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import LoginModal from 'components/modal/LoginModal';

class LoginModalContainer extends Component {
  handleLogin = async () => {
    const { BaseActions, password } = this.props;
    try {
      await BaseActions.login(password);
      BaseActions.hideModal('login');
    } catch(e) {
      console.error(e);
    }
  }

  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('login');
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInput(value);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleLogin();
    }
  }

  render() {
    const { handleLogin, handleCancel, handleChange, handleKeyPress } = this;
    const { visible, error, password } = this.props;
    return (
      <LoginModal
        onLogin={handleLogin} 
        onCancel={handleCancel}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        visible={visible}
        error={error}
        password={password}
      ></LoginModal>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.modal.login,
    error: state.base.loginModal.error,
    password: state.base.loginModal.password
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);