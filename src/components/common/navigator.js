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
            <div>
                <p>
                <Link to={this.props.previous}>Prev</Link> {this.props.titel} <Link to={this.props.next}>Next</Link>
                </p>
            </div>
        );
    }
}


export default Navigator;