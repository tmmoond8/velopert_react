import React, { Component } from 'react';
import PreviewPane from 'components/editor/PreviewPane';
import connect from 'react-redux/lib/connect/connect';

class PreviewPaneContainer extends Component {
  render() {
    const { markdown, title } = this.props;
    return (
      <PreviewPane title={title} markdown={markdown}/>
    );
  }
};

export default connect(
  (state) => ({
    ...state,
    title: state.editor.title ? state.editor.title : '제목을 입력하세요',
    markdown: state.editor.markdown
  })
)(PreviewPaneContainer);