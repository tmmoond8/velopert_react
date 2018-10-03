import React, { Component } from 'react';
import Footer from 'components/common/Footer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BaseActions from 'store/modules/base';

class FooterContainer extends Component {

  handleLoginClick = async () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('login');
  }

  handleLogoutClick = async () => {
    const { BaseActions } = this.props;
    try {
      await BaseActions.logout();
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const { handleLoginClick, handleLogoutClick } = this;
    const { logged } = this.props;
    return (
      <Footer logged={logged} onLoginClick={handleLoginClick} onLogoutClick={handleLogoutClick}/>
    )
  }
}

export default connect(
  (state) => ({
    logged: state.base.logged
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(BaseActions, dispatch)
  })
)(FooterContainer);