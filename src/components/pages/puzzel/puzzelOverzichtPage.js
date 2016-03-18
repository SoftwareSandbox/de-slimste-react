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
				<Navigator vorige="opendeur" titel="Puzzel" volgende="puzzel"></Navigator>
				<div id="puzzelRonde_OverzichtPagina" className="">
				<Link to="puzzel/0" >Puzzel 1</Link>
				<Link to="puzzel/1" >Puzzel 2</Link>
				<Link to="puzzel/2" >Puzzel 3</Link>
				</div>
			</div>
			);
	}
}

export default PuzzelOverzichtPage;