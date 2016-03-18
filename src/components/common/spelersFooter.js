import React, {Component, PropTypes} from 'react';
import Spelers from './spelers';
import SpelerStore from '../../stores/spelerStore';

class SpelersFooter extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        this.state = {
            spelers: SpelerStore.getSpelers()
        };
    }

    _onChange() {
        this.setState({spelers: SpelerStore.getSpelers()});
    }

    componentWillMount() {
        SpelerStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        SpelerStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
			<Spelers spelers={this.state.spelers} />
        );
    }
}

export default SpelersFooter;
