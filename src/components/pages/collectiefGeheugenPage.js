import React, {Component} from 'react';
import Navigator from '../common/navigator';

class CollectiefGeheugenPage extends Component {
    render() {
        return (
            <div>
                <p>collectief geheugen</p>
                <Navigator previous="galerij" titel="Collectief geheugen" next="finale"></Navigator>
            </div>
        );
    }
}

export default CollectiefGeheugenPage;