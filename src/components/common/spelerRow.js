import React, {Component} from 'react';
import Timer from './timer';
import SpelerAction from '../../actions/spelerAction';

class SpelerRow extends Component {

    static propTypes = {
        speler: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            stop: true
            // tijd: this.props.speler.score * 1000
        };
    }

    onClick = (event) => {
        this.state.stop = !this.state.stop;
        this.setState({stop: this.state.stop});
    };

    updateTijd = (tijdInMillis) => {
        if (this.props.speler.score * 1000 - tijdInMillis >= 10) {
            SpelerAction.updateTijd(this.props.speler.key, tijdInMillis / 1000);
        }
    }

    formatTime = (timeremaining) => {
        return Math.floor(timeremaining / 1000);
    };

    render() {
        let className = this.props.speler.geselecteerd ? 'geselecteerdeSpeler' : 'speler';
        return (
            <div className={className}>
                <div className="name">{this.props.speler.naam}</div>
                <div className="score">
                    { !this.state.stop ? 
                        <Timer 
                            initialTimeRemaining={this.props.speler.score * 1000} 
                            formatFunc={this.formatTime}
                            tickCallback={this.updateTijd}/> 
                        : 
                        this.formatTime(this.props.speler.score * 1000)
                    }
                </div>
                <button onClick={this.onClick}> {this.state.stop ? "START" : "STOP"} </button>
            </div>
        );
    }

    
}

export default SpelerRow;