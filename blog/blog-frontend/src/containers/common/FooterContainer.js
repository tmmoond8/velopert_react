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

  render() {
    const { handleLoginClick } = this;
    return (
      <Footer onLoginClick={handleLoginClick}/>
    )
  }
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(BaseActions, dispatch)
  })
)(FooterContainer);