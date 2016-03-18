import React, {Component, PropTypes} from 'react';
import Spelers from './spelers';
import SpelerStore from '../../stores/spelerStore';

class SpelersFooter extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        this.state = {
            spelers: SpelerStore.getSpelers(),
            timerGestart: SpelerStore.getTimerGestart()
        };
    }

    _onChange() {
        console.log(SpelerStore.getTimerGestart());
        this.state = {
                spelers: SpelerStore.getSpelers(),
                timerGestart: SpelerStore.getTimerGestart()
            };
        this.setState(this.state);
    }

    componentWillMount() {
        SpelerStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        SpelerStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
			<Spelers 
                spelers={this.state.spelers}
                timerGestart={this.state.timerGestart}
            />
        );
    }
}

export default SpelersFooter;
