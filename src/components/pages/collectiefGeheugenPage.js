import React, {Component} from 'react';
import Navigator from '../common/navigator';

class CollectiefGeheugenPage extends Component {
    render() {
        return (
            <div>
                <Navigator vorige="galerij" titel="Collectief geheugen" volgende="finale"></Navigator>
            </div>
        );
    }
}

export default CollectiefGeheugenPage;