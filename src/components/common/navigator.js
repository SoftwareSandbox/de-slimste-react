import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Navigator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title">
                <h1 ref="navTitle">
                    {this.props.vorige ? <Link to={this.props.vorige}><span id="vorigeRonde" className="fa fa-caret-left"></span></Link> : null}
                    &nbsp;&nbsp;&nbsp;{this.props.titel}&nbsp;&nbsp;&nbsp;
                    {this.props.volgende ? <Link to={this.props.volgende}><span id="volgendeRonde" className="fa fa-caret-right"></span></Link> : null }
                </h1>
            </div>
        );
    }
}

Navigator.propTypes = {
    vorige: PropTypes.string,
    titel: PropTypes.string.isRequired,
    volgende: PropTypes.string
};

export default Navigator;