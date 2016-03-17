import React, {Component} from 'react';
import Navigator from '../common/navigator';
import Spelers from '../common/spelers';
import SpelerStore from '../../stores/SpelerStore';

class DrieZesNegenPage extends Component {

	constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        this.state = {
            spelers: SpelerStore.getSpelers()
        };
    }

	_onChange() {
		console.log('onChange');
        this.setState({spelers: SpelerStore.getSpelers()});
    }

    componentWillMount() {
		console.log('CWM');
        SpelerStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
		console.log('CWU');
        SpelerStore.removeChangeListener(this._onChange.bind(this));
    }

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