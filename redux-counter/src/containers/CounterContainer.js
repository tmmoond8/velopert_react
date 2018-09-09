import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
const colors = [
    '#495057', '#f03e3e', '#B5B7C9', '#8B91AD', '#4E516B',
    '#2E3347', '#925D78', '#F1C5B5', '#48614A', '#252A3B',
    '#362A52', '#6C446B', '#DA9684', '#EAC8A4',
]

export function getRandomColor() {
    const random = Math.floor(Math.random() * 13);
    return colors[random];   
}

const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;