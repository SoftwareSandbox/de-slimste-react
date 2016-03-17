import React, {Component, PropTypes} from 'react';
import SpelerRow from './spelerRow';

class Spelers extends Component {

    static propTypes = {
        spelers: React.PropTypes.array
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
        let className = 'spelers aantalSpelers' + this.props.spelers.length;
        return (
			<div className={className}>
                {this.props.spelers.map(this.createSpelerRow)}
			</div>
        );
    }
}

export default Spelers;
