import React, {Component, PropTypes} from 'react';
import Spelers from './spelers';
import SpelerStore from '../../stores/spelerStore';
import SpelerAction from '../../actions/spelerAction';
import OpenQuizzerVenster from './openQuizzerVenster';

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

    volgendeSpeler = (event) => {
        SpelerAction.volgendeSpeler();
    };

    startTimer = () => {
        SpelerAction.startTimer();
    };

    stopTimer = () => {
        SpelerAction.stopTimer();
    };

    render() {
        return (
            <div className="menu">
                <div>
                    <OpenQuizzerVenster />
                    {this.props.hasVorigeVraag ?
                        <span className="fa fa-chevron-circle-left menuitem" onClick={this.props.onVorigeVraag}></span> :
                        <span className="fa fa-chevron-circle-left menuitemdisabled"></span>
                    }
                    {this.props.hasVolgendeVraag ?
                        <span className="fa fa-chevron-circle-right menuitem" onClick={this.props.onVolgendeVraag} ></span> :
                        <span className="fa fa-chevron-circle-right menuitemdisabled" ></span>
                    }
                </div>
                <div>
                    <span className="fa fa-play menuitem" onClick={this.startTimer}></span>
                    <span className="fa fa-stop menuitem" onClick={this.stopTimer}></span>
                    {this.props.onVraagJuist ?
                        <span className="fa fa-check menuitem" onClick={this.props.onVraagJuist}></span> :
                        <span className="fa fa-check menuitemdisabled" ></span>
                    }
                </div>
                <div>
                    <span className="fa fa-plus-circle menuitem"></span>
                    <span className="fa fa-minus-circle menuitemdisabled'"></span>
                </div>
                <div>
                    <span className="fa fa-user menuitem" onClick={this.volgendeSpeler}></span>
                    <span className="fa fa-link menuitem"></span>
                </div>
            </div>
        );
    }
}

export default Menu;



