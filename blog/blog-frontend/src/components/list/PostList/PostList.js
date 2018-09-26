import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';

const cx = classNames.bind(styles);

const PostItem = ({title, body, publishedDate, tags, id}) => {
  const tagList = tags.map((tag, index) => <Link key={index} to={`/tag/${tag}`}>#{tag}</Link>);
  return (
    <div className={cx('post-item')}>
      <h2><Link to={`/post/${id}`}>{title}</Link></h2>
      <div className={cx('data')}>2018-11-11</div>
      <p>내용</p>
      <div className={cx('tags')}>
        {tagList}
      </div>
    </div>
  )
}

const PostList = ({posts}) => {
  const renderItem = (post) => {
    const { _id, title, body, publishedDate, tags } = post;
    return (
      <PostItem
        key={_id}
        id={_id}
        title={title}
        body={body}
        publishedDate={publishedDate}
        tags={tags}
      />
    )
  }

  return (
    <div className={cx('post-list')}>
      {posts.map((post) => renderItem(post))}
    </div>
  );
};

export default PostList;