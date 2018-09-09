import React from 'react';
import styles from './Buttons.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Button = ({children, ...rest}) => {
  return (
    <div className={cx('button')} {...rest}>
      {children}
    </div>
  );
};

export default Button;