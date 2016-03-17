import React, {Component} from 'react';
import Navigator from '../common/navigator';

class DrieZesNegenPage extends Component {
    render() {
        return (
            <div>
                <p>driezesnegen</p>
                <Navigator previous="home" titel="3-6-9" next="opendeur"></Navigator>
            </div>
        );
    }
}

export default DrieZesNegenPage;