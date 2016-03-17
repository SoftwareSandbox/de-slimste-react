import React, {Component} from 'react';
import Navigator from '../common/navigator';

class OpenDeurPage extends Component {
    render() {
        return (
            <div>
                <p>open deur</p>
                <Navigator previous="driezesnegen" titel="Open deur" next="puzzel"></Navigator>
            </div>
        );
    }
}

export default OpenDeurPage;