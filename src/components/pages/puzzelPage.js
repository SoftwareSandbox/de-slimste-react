import React, {Component} from 'react';
import Navigator from '../common/navigator';
class PuzzelPage extends Component {
    render() {
        return (
            <div>
                <Navigator vorige="opendeur" titel="Puzzel" volgende="galerij"></Navigator>
            </div>
        );
    }
}

export default PuzzelPage;