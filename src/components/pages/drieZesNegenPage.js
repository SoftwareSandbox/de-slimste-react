import React, {Component} from 'react';
import Navigator from '../common/navigator';
import Spelers from '../common/spelers';

class DrieZesNegenPage extends Component {
    render() {
        var spelers = {};
        spelers.spelers = [];
        spelers.spelers.push({ naam: "Kristof", score: 50, geselecteerd: true });
        spelers.spelers.push({ naam: "Tim", score: 70 });
        spelers.spelers.push({ naam: "Tom", score: 60 });
        return (
            <div>
                <Navigator vorige="home" titel="3-6-9" volgende="opendeur"></Navigator>
                <Spelers spelers={spelers}/>
            </div>
        );
    }
}

export default DrieZesNegenPage;