import React, {Component, PropTypes} from 'react';
import Spelers from './spelers';
import SpelerStore from '../../stores/spelerStore';

class Menu extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
    }

    static propTypes = {
        onVolgendeVraag: React.PropTypes.func.isRequired,
        onVorigeVraag: React.PropTypes.func.isRequired,
        hasVolgendeVraag: React.PropTypes.bool.isRequired,
        hasVorigVraag: React.PropTypes.bool.isRequired,
        onVolgendeSpeler: React.PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="menu">
                <div>
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
                    <span className="fa fa-play menuitem"></span>
                    <span className="fa fa-stop menuitem"></span>
                    <span className="fa fa-check menuitem"></span>
                </div>
                <div>
                    <span className="fa fa-plus-circle menuitem"></span>
                    <span className="fa fa-minus-circle menuitem'"></span>
                </div>
                <div>
                    <span className="fa fa-user menuitem" onClick={this.props.onVolgendeSpeler}></span>
                    <span className="fa fa-link menuitem"></span>
                </div>
            </div>
        );
    }
}

export default Menu;



