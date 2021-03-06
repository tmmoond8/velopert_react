import React, { Fragment } from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = ({postId, onRemove, logged}) => {

  return (
    <header className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('brand')}>
          <Link to="/">react blog</Link>
        </div>
        {logged && <div className={cx('right')}>
          {postId && (
            <Fragment>
              <Button theme="outline" to={`/editor?id=${postId}`}>수정하기</Button>
              <Button theme="outline" onClick={onRemove}>삭제하기</Button>
            </Fragment>
          )}
          <Button theme="outline" to="/editor">새 포스트</Button>
        </div>}
      </div>
    </header>
  );
};

export default Header;