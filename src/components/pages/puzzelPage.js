import React, {Component} from 'react';
import Navigator from '../common/navigator';
class PuzzelPage extends Component {
    render() {
        return (
            <div>
            <p>puzzel</p>
                <Navigator previous="opendeur" titel="Puzzel" next="galerij"></Navigator>
            </div>
        );
    }
}

export default PuzzelPage;