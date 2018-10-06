import React, { Component } from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shouldCancel from 'lib/shouldCancel';

class Post extends Component {

  initialize = async () => {
    if (shouldCancel()) return;
    const { PostActions, id } = this.props;
    try {
      await PostActions.getPost(id);
    } catch(e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    const { loading, post } = this.props;
    const { title, body, publishedDate, tags } = post;
    if(loading) return null;
    return (
      <div>
        <PostInfo title={title} publishedDate={publishedDate} tags={tags}/>
        <PostBody body={body}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    ...state,
    post: state.post.post,
    loading: state.pender.pending['post/GET_POST']
  }),
  (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(Post);