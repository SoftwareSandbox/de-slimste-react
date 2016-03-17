import React, {Component} from 'react';
import {Link} from 'react-router';
import Navigator from './common/navigator';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Admin</h1>
                <p> React, React Router, and Flux for teh w1n!!</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
                <Navigator previous="authors" titel="3-6-9" next="about"></Navigator>
            </div>
        );
    }
}

export default Home;