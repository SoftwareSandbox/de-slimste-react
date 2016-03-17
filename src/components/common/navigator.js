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
            <div>
                <p>
                    {this.props.vorige ? <Link to={this.props.vorige}>Vorige </Link> : null}
                    {this.props.titel}
                    {this.props.volgende ? <Link to={this.props.volgende}> Volgende</Link> : null }
                </p>
            </div>
        );
    }
}


export default Navigator;