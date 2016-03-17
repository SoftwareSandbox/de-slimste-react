import React, {Component} from 'react';

class SpelerRow extends Component {

    static propTypes = {
        speler: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let className = this.props.speler.geselecteerd ? 'geselecteerdeSpeler' : 'speler';
        return (
				<div className={className}>
					<div className="name">{this.props.speler.naam}</div>
					<div className="score">{this.props.speler.score}</div>
				</div>
            );
    }
}

export default SpelerRow;