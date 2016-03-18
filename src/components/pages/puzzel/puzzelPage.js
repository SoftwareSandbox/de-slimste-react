import React, {Component} from 'react';
import Navigator from '../../common/navigator';
import VragenStore from '../../../stores/vragenStore';

class PuzzelPage extends Component {

	constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
    }

    componentWillMount() {
		this.setState({puzzel: VragenStore.getPuzzel(this.props.params.puzzelNummer)});
    }

	render() {
		return (
			<div>
				<Navigator vorige="puzzelOverzicht" titel="Puzzel" volgende="galerij"></Navigator>
				<div id="puzzelRonde" className="">
					<div>
						<div className="">
							<table className="puzzelTabel" cellSpacing="20px;">
								<tr>
									<td className="puzzelCel">{this.state.puzzel[0].hints[0]}</td>
									<td className="puzzelCel">{this.state.puzzel[1].hints[0]}</td>
									<td className="puzzelCel">{this.state.puzzel[2].hints[2]}</td>
									<td className="puzzelCel">{this.state.puzzel[2].hints[3]}</td>
								</tr>
								<tr>
									<td className="puzzelCel">{this.state.puzzel[0].hints[1]}</td>
									<td className="puzzelCel">{this.state.puzzel[1].hints[1]}</td>
									<td className="puzzelCel">{this.state.puzzel[0].hints[3]}</td>
									<td className="puzzelCel">{this.state.puzzel[2].hints[1]}</td>
								</tr>
								<tr>
									<td className="puzzelCel">{this.state.puzzel[1].hints[2]}</td>
									<td className="puzzelCel">{this.state.puzzel[1].hints[3]}</td>
									<td className="puzzelCel">{this.state.puzzel[0].hints[2]}</td>
									<td className="puzzelCel">{this.state.puzzel[2].hints[0]}</td>
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