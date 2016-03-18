import React, {Component} from 'react';
import Navigator from '../../common/navigator';

class Vraag extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
    }

    static propTypes = {
      vraag: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <div id="drieZesNegenRonde" className="drieZesNegenParent">
                <h2 className="ng-binding">Huidige vraag: {this.props.vraag.nummer}</h2>
                <p className="ng-binding">{this.props.vraag.vraag}</p>
                <h2>Antwoord:</h2>
                <p className="ng-binding">{this.props.vraag.antwoord}</p>
            </div>
        );
    }
}

export default Vraag;
