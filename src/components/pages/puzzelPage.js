import React, {Component} from 'react';
import Navigator from '../common/navigator';
class PuzzelPage extends Component {
	render() {
		return (
			<div>
				<Navigator vorige="opendeur" titel="Puzzel" volgende="galerij"></Navigator>
				<div id="puzzelRonde" className="">
					<div>
						<div className="">
							<table className="puzzelTabel" cellSpacing="20px;">
								<tr>
									<td className="puzzelCel ">Hint 2 voor 2</td>
									<td className="puzzelCel ">Hint 2 voor 1</td>
									<td className="puzzelCel ">Hint 1 voor 2</td>
									<td className="puzzelCel ">Hint 3 voor 2</td>
								</tr>
								<tr>
									<td className="puzzelCel ">Hint 2 voor 3</td>
									<td className="puzzelCel ">Hint 3 voor 1</td>
									<td className="puzzelCel ">Hint 3 voor 3</td>
									<td className="puzzelCel ">Hint 1 voor 3</td>
								</tr>
								<tr>
									<td className="puzzelCel ">Hint 4 voor 1</td>
									<td className="puzzelCel ">Hint 4 voor 3</td>
									<td className="puzzelCel ">Hint 1 voor 1</td>
									<td className="puzzelCel ">Hint 4 voor 2</td>
								</tr>
							</table>	
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default PuzzelPage;