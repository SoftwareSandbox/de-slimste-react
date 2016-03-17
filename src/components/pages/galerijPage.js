import React, {Component} from 'react';
import Navigator from '../common/navigator';

class GalerijPage extends Component {
    render() {
        return (
            <div>
                <Navigator vorige="puzzel" titel="Galerij" volgende="collectiefgeheugen"></Navigator>
            </div>
        );
    }
}

export default GalerijPage;