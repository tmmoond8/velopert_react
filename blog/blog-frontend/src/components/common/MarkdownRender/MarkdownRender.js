import React, { Component } from 'react';
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';
import marked from 'marked';

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
  state = {
    html: ''
  }
  constructor(props) {
    super(props);
    const { markdown } = props;
    this.state = {
      html: markdown ? marked(props.markdown, { backs: true, sanitize: true}) : ''
    }
  }

  renderMarkdown = () => {
    const { markdown } = this.props;
    if (!markdown) {
      this.setState({html: ''});
      return;
    }
    this.setState({
      html: marked(markdown, {
        breaks: true,
        sanitize: true
      })
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown();
    }
  }

  render() {
    const { html } = this.state;
    const markup = {
      __html: html
    }
    return (
      <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup}/>
    );
  }
};

export default MarkdownRender;