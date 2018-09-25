import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditorPane from 'components/editor/EditorPane';
import * as editorActions from 'store/modules/editor';

class EditorPaneContainer extends Component {

  handleChangeInput = ({name, value}) => {
    const { EditorActions } = this.props;
    EditorActions.changeInput({name, value});
  }

  render() {
    const { title, tags, markdown } = this.props;
    const { handleChangeInput } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        onChangeInput={handleChangeInput}
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
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);