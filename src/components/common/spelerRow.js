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
            stop: true,
            tijd: this.props.speler.score * 1000
        };
    }

    onClick = (event) => {
        this.state.stop = !this.state.stop;
        this.setState({stop: this.state.stop});
        if(this.state.stop){
            SpelerAction.updateTijd(this.props.speler.key, this.state.tijd / 1000);
        }
    };

    updateTijd = (tijdInMillis) => {
        if (this.state.tijd - tijdInMillis > 100) {
            this.setState({tijd: tijdInMillis});
        }

        // console.log(this.props.speler.score);
        // if (this.props.speler.score - tijdInMillis/1000 > 1) {
        //     SpelerAction.updateTijd(this.props.speler.key);
        // }
    }

    formatTime = (timeremaining) => {
        return Math.floor(timeremaining / 1000);
    };

    // updateTijd = (tijdInMillis) => {
    //     if (this.state.score - tijdInMillis > 100) {
    //         this.setState({score: tijdInMillis});
    //     }

    // };

    addSeconds = () => {
        this.setState({tijd: this.state.tijd + (1000 * 10)});
    };



    render() {
        let className = this.props.speler.geselecteerd ? 'geselecteerdeSpeler' : 'speler';
        return (
            <div className={className}>
                <div className="name">{this.props.speler.naam}</div>
                <div className="score">
                    { !this.state.stop ? 
                    <Timer initialTimeRemaining={this.props.speler.score * 1000} 
                    formatFunc={this.formatTime}
                    tickCallback={this.updateTijd}/> : "read only " + this.props.speler.score
                    }
                </div>
            <button onClick={this.onClick}> {this.state.stop ? "START" : "STOP"} </button>
            </div>
        );
    }

    
}

export default SpelerRow;