import React, {Component, PropTypes} from 'react';
import SpelerRow from './spelerRow';

class Spelers extends Component {

    static propTypes = {
        spelers: React.PropTypes.array,
        geselecteerdeSpeler: React.PropTypes.number,
        timerGestart: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    createSpelerRow = (speler) => {
        return (<SpelerRow key={speler.key} speler={speler} timerGestart={this.props.timerGestart && speler.geselecteerd}/>);
    };

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
