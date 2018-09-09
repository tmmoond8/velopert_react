import React, { Component } from 'react';
import Button from '../components/Buttons';

import { connect } from 'react-redux';
import * as actions from '../actions';
import CounterListContainer from './CounterListContainer';
import { getRandomColor } from '../lib/util';


class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (
            <div className="App">
                <Button
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        )
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);