import React, {Component} from 'react';
import Navigator from '../common/navigator';

class OpenDeurPage extends Component {
    render() {
        return (
            <div>
                <Navigator vorige="driezesnegen" titel="Open deur" volgende="puzzel"></Navigator>
            </div>
        );
    }
}

export default OpenDeurPage;