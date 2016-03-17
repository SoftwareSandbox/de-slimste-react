import React, {Component} from 'react';
import {Link} from 'react-router';
import Navigator from './common/navigator';
import Timer from './common/timer';

class Home extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        this.state = {
            tijd: 10000,
            stop: true
        };
    }

    onClick = (event) => {
        this.setState({stop: !this.state.stop});
    };

    render() {
        return (
            <div>
                <Navigator titel="Start" volgende="driezesnegen"></Navigator>
                { !this.state.stop ? <Timer initialTimeRemaining={this.state.tijd} formatFunc={this.formatTime}
                                            tickCallback={this.updateTijd}/> :
                    <div>{Math.floor(this.state.tijd / 1000)}</div> }
                <button onClick={this.onClick}> {this.state.stop ? "START" : "STOP"} </button>
                <button onClick={this.addSeconds}>+10 seconden</button>
            </div>
        );
    }

    formatTime = (timeremaining) => {
        return Math.floor(timeremaining / 1000);
    };

    updateTijd = (tijdInMillis) => {
        if (this.state.tijd - tijdInMillis > 100) {
            this.setState({tijd: tijdInMillis});
        }

    };

    addSeconds = () => {
        this.setState({tijd: this.state.tijd + (1000 * 10)});
    }
}

export default Home;