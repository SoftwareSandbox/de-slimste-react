import React, {Component} from 'react';
import Navigator from '../../common/navigator';
import SpelersFooter from '../../common/spelersFooter';
import Vraag from './drieZesNegenVraag';
import Menu from '../../common/menu';

class DrieZesNegenPage extends Component {

	constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
    }

    static propTypes = {
        vraag: React.PropTypes.object.isRequired,
        onVolgendeVraag: React.PropTypes.func.isRequired,
        onVorigeVraag: React.PropTypes.func.isRequired,
        hasVorigeVraag: React.PropTypes.bool.isRequired,
        hasVolgendeVraag: React.PropTypes.bool.isRequired,
        vorige: React.PropTypes.string,
        volgende: React.PropTypes.string
    };

    render() {
        return (
            <div>
                <Navigator vorige={this.props.vorige} titel="3-6-9" volgende={this.props.volgende} />
                <Vraag vraag={this.props.vraag} />
                <Menu
                    hasVolgendeVraag={this.props.hasVolgendeVraag}
                    hasVorigeVraag={this.props.hasVorigeVraag}
                    onVolgendeVraag={this.props.onVolgendeVraag}
                    onVorigeVraag={this.props.onVorigeVraag}
                />
                <SpelersFooter />
            </div>
        );
    }
}

export default DrieZesNegenPage;