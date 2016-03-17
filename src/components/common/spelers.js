import React, {Component, PropTypes} from 'react';
import SpelerRow from './spelerRow';

class Spelers extends Component {

    static propTypes = {
        spelers: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    createSpelerRow(speler) {
        return (
            <SpelerRow speler={speler} />
        );
    }

    render() {
        let className = 'spelers aantalSpelers' + this.props.spelers.spelers.length;
        return (
			<div className={className}>
                {this.props.spelers.spelers.map(this.createSpelerRow)}
			</div>
        );
    }
}

export default Spelers;
