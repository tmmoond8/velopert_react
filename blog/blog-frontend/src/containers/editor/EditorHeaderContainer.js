import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditorHeader from 'components/editor/EditorHeader';
import { withRouter } from 'react-router-dom';

import * as editorActions from 'store/modules/editor';

class EditorHeaderContainer extends Component {

  componentDidMount() {
    const { EditorActions } = this.props;
    EditorActions.initialize();
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  handleSubmit = async () => {
    const { title, markdown, tags, EditorActions, history } = this.props;
    const post = {
      title,
      body: markdown,
      tags: tags === "" ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
    };
    try {
      await EditorActions.writePost(post);
      history.push(`/post/${this.props.postId}`);
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const { handleGoBack, handleSubmit } = this;

    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
      />
    );
  }
}

export default connect(
  (state) => ({
    ...state,
    title: state.editor.title,
    markdown: state.editor.markdown,
    tags: state.editor.tags,
    postId: state.editor.postId
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));