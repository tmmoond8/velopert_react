import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, index, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
            className="Counter"
            onClick={() => onIncrement(index)}
            onContextMenu={(e) => {
                e.preventDefault();
                onDecrement(index);
            }}
            onDoubleClick={() => onSetColor(index)}
            style={{
                backgroundColor: color
            }}
        >
        {number}
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not default'),
    onDecrement: () => console.warn('onDecrement not default'),
    onSetColor: () => console.warn('onSetColor not default') 
}

export default Counter;