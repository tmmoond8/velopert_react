import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({onCreate, onRemove}) => {
    return (
        <div className="Button">
            <div className="btn add" onClick={onCreate}>생성</div>
            <div className="btn remove" onClick={onRemove}>제거</div>
        </div>
    );
}

Button.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
}

Button.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

export default Button;