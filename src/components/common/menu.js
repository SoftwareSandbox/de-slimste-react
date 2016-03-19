import React, {Component, PropTypes} from 'react';
import Spelers from './spelers';
import SpelerStore from '../../stores/spelerStore';
import SpelerAction from '../../actions/spelerAction';

var quizzerWindow;

class Menu extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
    }

    static propTypes = {
        onVolgendeVraag: React.PropTypes.func.isRequired,
        onVorigeVraag: React.PropTypes.func.isRequired,
        hasVolgendeVraag: React.PropTypes.bool.isRequired,
        hasVorigVraag: React.PropTypes.bool.isRequired,
        onVraagJuist: React.PropTypes.func,
        onVolgendeSpeler: React.PropTypes.func.isRequired
    };

    volgendeSpeler = () => {
        SpelerAction.volgendeSpeler();
    };

    startTimer = () => {
        SpelerAction.startTimer();
    };

    stopTimer = () => {
        SpelerAction.stopTimer();
    };

    openQuizzerVenster = () => {
        quizzerWindow = window.open("#/quizzer", "Quizzers");
    };

    sendMessage = () => {
        if (quizzerWindow) {
            quizzerWindow.postMessage({name: "TEST", message: "Hallo kindjes"}, "*");
        }
    };

    render() {
        return (
            <div className="menu">
                <div>
                    {this.props.hasVorigeVraag ?
                        <span className="fa fa-chevron-circle-left menuitem"
                              onClick={this.props.onVorigeVraag}></span> :
                        <span className="fa fa-chevron-circle-left menuitemdisabled"></span>
                    }
                    {this.props.hasVolgendeVraag ?
                        <span className="fa fa-chevron-circle-right menuitem"
                              onClick={this.props.onVolgendeVraag}></span> :
                        <span className="fa fa-chevron-circle-right menuitemdisabled"></span>
                    }
                </div>
                <div>
                    <span className="fa fa-play menuitem" onClick={this.startTimer}></span>
                    <span className="fa fa-stop menuitem" onClick={this.stopTimer}></span>
                    {this.props.onVraagJuist ?
                        <span className="fa fa-check menuitem" onClick={this.props.onVraagJuist}></span> :
                        <span className="fa fa-check menuitemdisabled"></span>
                    }
                </div>
                <div>
                    <span className="fa fa-plus-circle menuitem"></span>
                    <span className="fa fa-minus-circle menuitemdisabled'"></span>
                </div>
                <div>
                    <span className="fa fa-user menuitem" onClick={this.volgendeSpeler}></span>
                    <a className="fa fa-link menuitem" target="_blank" onClick={this.openQuizzerVenster}></a>
                    <button type="button" onClick={this.sendMessage}>msg chldwndw</button>
                </div>
            </div>
        );
    }
}

export default Menu;



