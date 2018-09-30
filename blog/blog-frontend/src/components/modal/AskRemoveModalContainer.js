import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import * as postActions from 'store/modules/post';
import AskRemoveModal from 'components/modal/AskRemoveModal';
import withRouter from 'react-router-dom/withRouter';

class AskRemoveModalContainer extends Component {
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('removePost');
  }

  handleConfirm = async () => {
    const { BaseActions, PostActions, history, match } = this.props;
    const { id } = match.params;

    try {
      await PostActions.removePost(id);
      history.push('/');
    } catch (e) {
      console.error(e);
    } finally {
      BaseActions.hideModal('removePost');
    }
  }

  render() {
    const { visible } = this.props;
    const { handleCancel, handleConfirm } = this;
    return (
      <AskRemoveModal visible={visible} onCancel={handleCancel} onConfirm={handleConfirm}/>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.modal && state.base.modal.removePost
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(withRouter(AskRemoveModalContainer));