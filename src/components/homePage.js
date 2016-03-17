import React, {Component} from 'react';
import {Link} from 'react-router';
import Navigator from './common/navigator';

class Home extends Component {
    render() {
        return (
            <Navigator previous="authors" titel="3-6-9" next="driezesnegen"></Navigator>
        );
    }
}

export default Home;