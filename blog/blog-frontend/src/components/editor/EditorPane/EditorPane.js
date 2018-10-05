import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

// 코드 미러 스타일은 불러온다.
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

let CodeMirror = null;
const isBrowser = process.env.APP_ENV === 'browser';
if (isBrowser) {
  CodeMirror = require('codemirror');
  require('codemirror/mode/markdown/markdown');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/jsx/jsx');
  require('codemirror/mode/css/css');
  require('codemirror/mode/shell/shell');
}

const cx = classNames.bind(styles);

class EditorPane extends Component {
  editor = null;
  codeMirror = null;
  cursor = null;

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    });
    this.codeMirror.on('change', this.handleChangeMarkdown);
  }

  componentDidMount() {
    this.initializeEditor();
  }

  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;
    onChangeInput({name, value});
  }

  handleChangeMarkdown = (doc) => {
    const { onChangeInput } = this.props;
    this.cursor = doc.getCursor();
    onChangeInput({
      name: 'markdown',
      value: doc.getValue()
    });
  }

  componentDidUpdate(preProps, prevState) {
    if(preProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this;
      if(!codeMirror) {
        return;
      }
      codeMirror.setValue(this.props.markdown);
      if(!cursor) {
        return;
      }
      codeMirror.setCursor(cursor);
    }
  }

  render() {
    const { handleChange } = this;
    const { tags, title } = this.props;

    return (
      <div className={cx('editor-pane')}>
        <input 
          className={cx('title')} 
          placeholder="제목을 입력하세요" 
          name="title"
          value={title}
          onChange={handleChange}
        />
        <div className={cx('code-editor')} ref={ref => this.editor = ref}></div>
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input 
            name="tags" 
            placeholder="태그를 입력하세요. (쉼표로 구분)"
            value={tags}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
};

export default EditorPane;