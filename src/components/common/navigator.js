import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Navigator extends Component {

    static propTypes = {
        previous: PropTypes.string,
        titel: PropTypes.string,
        next: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title">
                <h1>
                    <Link to={this.props.previous}><span id="vorigeRonde" className="fa fa-caret-left"></span></Link>
                    &nbsp;&nbsp;&nbsp;{this.props.titel}&nbsp;&nbsp;&nbsp;
                    <Link to={this.props.next}><span id="volgendeRonde" className="fa fa-caret-right"></span></Link>
                </h1>
            </div>
        );
    }
}


export default Navigator;