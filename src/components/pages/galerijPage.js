import React, {Component} from 'react';
import Navigator from '../common/navigator';

class GalerijPage extends Component {
    render() {
        return (
            <div>
                <p>galerij</p>
                <Navigator previous="puzzel" titel="Galerij" next="collectiefgeheugen"></Navigator>
            </div>
        );
    }
}

export default GalerijPage;