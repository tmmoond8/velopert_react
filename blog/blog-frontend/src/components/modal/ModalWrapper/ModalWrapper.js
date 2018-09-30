import React, { Component, Fragment } from 'react';
import styles from './ModalWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ModalWrapper extends Component {
	render() {
		const { children, visible } = this.props;
		return (
			<div>
				{!visible ? null : (
					<Fragment>
						<div className={cx('gray-background')}/>
						<div className={cx('modal-wrapper')}>
							<div className={cx('modal')}>
								{children}
							</div>
						</div>
					</Fragment>
				)}
			</div>
		);
	}
}

export default ModalWrapper