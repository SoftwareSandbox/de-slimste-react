import React, {Component} from 'react';
import Navigator from '../common/navigator';
class PuzzelOverzichtPage extends Component {
	render() {
		return (
			<div>
				<Navigator vorige="opendeur" titel="Puzzel" volgende="puzzel"></Navigator>
				<div id="puzzelRonde_OverzichtPagina" className="">
					<button>Puzzel 1</button>
					<button>Puzzel 2</button>
					<button>Puzzel 3</button>
				</div>
			</div>
			);
	}
}

export default PuzzelOverzichtPage;