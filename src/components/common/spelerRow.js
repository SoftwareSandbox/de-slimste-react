import React, {Component} from 'react';
import Timer from './timer';
import SpelerAction from '../../actions/spelerAction';

class SpelerRow extends Component {

    constructor(props) {
        super(props);
    }

    updateTijd() {
        return (tijdInMillis) => {
            if (this.props.speler.score * 1000 - tijdInMillis >= 10) {
                SpelerAction.updateTijd(this.props.speler.key, tijdInMillis / 1000);
            }
        };
    }

    formatTime() {
        return (timeremaining) => {
            return Math.floor(timeremaining / 1000);
        };
    }

    render() {
        let className = this.props.speler.geselecteerd ? 'geselecteerdeSpeler' : 'speler';
        return (
            <div className={className}>
                <div className="name">{this.props.speler.naam}</div>
                <div className="score">
                    { this.props.timerGestart ? 
                        <Timer 
                            initialTimeRemaining={this.props.speler.score * 1000} 
                            formatFunc={this.formatTime()}
                            tickCallback={this.updateTijd()}/> 
                        : this.formatTime()(this.props.speler.score * 1000)
                    }
                </div>
            </div>
        );
    }
}

SpelerRow.propTypes = {
    speler: React.PropTypes.object.isRequired,
    timerGestart: React.PropTypes.bool
};

export default SpelerRow;