import React, {Component} from 'react';
import Navigator from '../../common/navigator';
import Spelers from '../../common/spelers';
import Vraag from './drieZesNegenVraag';

class DrieZesNegenPage extends Component {

	constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
    }

    static propTypes = {
        spelers: React.PropTypes.array.isRequired,
        vraag: React.PropTypes.object.isRequired,
        onVolgendeVraag: React.PropTypes.func.isRequired,
        onVorigeVraag: React.PropTypes.func.isRequired,
        vorige: React.PropTypes.string,
        volgende: React.PropTypes.string
    };

    render() {
        return (
            <div>
                <Navigator vorige={this.props.vorige} titel="3-6-9" volgende={this.props.volgende} />
                <Vraag vraag={this.props.vraag} />
                <button onClick={this.props.onVorigeVraag}> Vorige </button>
                <button onClick={this.props.onVolgendeVraag}> Volgende </button>
                <Spelers spelers={this.props.spelers}/>
            </div>
        );
    }
}

export default DrieZesNegenPage;