import React, {Component} from 'react';
import {Link} from 'react-router';
import Navigator from './common/navigator';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigator titel="Start" volgende="driezesnegen"></Navigator>
            </div>
        );
    }
}

export default Home;