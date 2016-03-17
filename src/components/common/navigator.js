import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Navigator extends Component {

    static propTypes = {
        vorige: PropTypes.string,
        titel: PropTypes.string.required,
        volgende: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title">
                <h1>
                    {this.props.vorige ? <Link to={this.props.vorige}><span id="vorigeRonde" className="fa fa-caret-left"></span></Link> : null}
                    &nbsp;&nbsp;&nbsp;{this.props.titel}&nbsp;&nbsp;&nbsp;
                    {this.props.volgende ? <Link to={this.props.volgende}><span id="volgendeRonde" className="fa fa-caret-right"></span></Link> : null }
                </h1>
            </div>
        );
    }
}


export default Navigator;