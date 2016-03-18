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
        if(this.props.timerGestart && speler.geselecteerd){
            return (<SpelerRow speler={speler} timerGestart={true}/>);
        }
        return (<SpelerRow speler={speler} timerGestart={false}/>);
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
