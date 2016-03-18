import React, {Component} from 'react';
import Navigator from '../../common/navigator';
import {Navigation, Link} from 'react-router';
class PuzzelOverzichtPage extends Component {

	constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
    }

	render() {
		return (
			<div>
				<Navigator vorige="opendeur" titel="Puzzel" volgende="/puzzel/0"></Navigator>
				<div id="puzzelRonde_OverzichtPagina" className="">
				<Link classname="slimsteQuizConfiguratie" to="/puzzel/0"><input type="button" value="Puzzel 1" className="slimsteQuizConfiguratie"/></Link>
				<Link classname="slimsteQuizConfiguratie" to="/puzzel/1"><input type="button" value="Puzzel 2" className="slimsteQuizConfiguratie"/></Link>
				<Link classname="slimsteQuizConfiguratie" to="/puzzel/2"><input type="button" value="Puzzel 3" className="slimsteQuizConfiguratie"/></Link>
				</div>
			</div>
			);
	}
}

export default PuzzelOverzichtPage;