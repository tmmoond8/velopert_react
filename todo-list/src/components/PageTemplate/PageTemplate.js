import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            
        </div>
    )
};

export default PageTemplate;