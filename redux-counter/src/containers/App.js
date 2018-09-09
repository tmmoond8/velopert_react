import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';
import Button from '../components/Button';

import { connect } from 'react-redux';
import * as actions from '../actions';


class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (
            <div className="App">
                <Button
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterContainer/>
            </div>
        )
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create('#124322')),
    onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);