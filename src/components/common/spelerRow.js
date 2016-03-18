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
            tijd: 10000,
            stop: true
        };
    }

     onClick = (event) => {
        this.setState({stop: !this.state.stop});
    };

    onClickDummy = (event) => {
        SpelerAction.secondeMinder(this.props.speler.key);
    }

    formatTime = (timeremaining) => {
        return Math.floor(timeremaining / 1000);
    };

    updateTijd = (tijdInMillis) => {
        if (this.state.score - tijdInMillis > 100) {
            this.setState({score: tijdInMillis});
        }

    };

    addSeconds = () => {
        this.setState({tijd: this.state.tijd + (1000 * 10)});
    };



    render() {
        let className = this.props.speler.geselecteerd ? 'geselecteerdeSpeler' : 'speler';
        return (
            <div className={className}>
                <div className="name">{this.props.speler.naam}</div>
                <div className="score">{this.props.speler.score}</div>

                 { !this.state.stop ? 
                    <Timer initialTimeRemaining={this.state.tijd} 
                    formatFunc={this.formatTime}
                    tickCallback={this.updateTijd}/> :
                <div>{Math.floor(this.state.tijd / 1000)}</div> 
                    }
            <button onClick={this.onClickDummy}> {this.state.stop ? "START" : "STOP"} </button>
            <button onClick={this.addSeconds}> + 10 seconden</button>
            </div>
        );
    }

    
}

export default SpelerRow;