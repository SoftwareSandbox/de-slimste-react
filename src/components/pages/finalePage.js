import React, {Component} from 'react';
import Navigator from '../common/navigator';

class FinalePage extends Component {
    render() {
        return (
            <div>
            <p>finale</p>
                <Navigator previous="collectiefgeheugen" titel="Finale" next="finale"></Navigator>
            </div>
        );
    }
}

export default FinalePage;