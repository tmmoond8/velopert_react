import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = ({onLoginClick, onLogoutClick, logged}) => {

  const renderAdminButton = () => {
    if (logged) {
      return (<div className={cx('admin-login')} onClick={onLogoutClick}>로그아웃</div>)
    } else {
      return (<div className={cx('admin-login')} onClick={onLoginClick}>관리자 로그인</div>)
    }
  }

  return (
    <footer className={cx('footer')}>
      <Link to="/" className={cx('brand')}>react blog</Link>
      {renderAdminButton()}
    </footer>
  );
};

export default Footer;