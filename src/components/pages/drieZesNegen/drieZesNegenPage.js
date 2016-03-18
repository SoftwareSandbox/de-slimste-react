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
        onVraagJuist: React.PropTypes.func,
        vorige: React.PropTypes.string,
        volgende: React.PropTypes.string
    };

    render() {
        return (
            <div>
                <Navigator vorige="home" titel="3-6-9" volgende="opendeur" />
                <Vraag vraag={this.props.vraag} />
                <Menu
                    hasVolgendeVraag={this.props.hasVolgendeVraag}
                    hasVorigeVraag={this.props.hasVorigeVraag}
                    onVolgendeVraag={this.props.onVolgendeVraag}
                    onVorigeVraag={this.props.onVorigeVraag}
                    onVraagJuist={this.props.onVraagJuist}
                />
                <SpelersFooter />
            </div>
        );
    }
}

export default DrieZesNegenPage;