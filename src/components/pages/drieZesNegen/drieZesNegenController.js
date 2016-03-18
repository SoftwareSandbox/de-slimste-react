import React, {Component} from 'react';
import DrieZesNegen from './drieZesNegenPage';
import VragenStore from '../../../stores/vragenStore';

class DrieZesNegenController extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        this.state = {
            vraag: VragenStore.getVraag("DRIE_ZES_NEGEN", 0)
        };
        //this.volgendeVraag = this.volgendeVraag.bind(this);
    }

    volgendeVraag = (event) => {
        var volgendNummer = this.state.vraag.nummer + 1;
        this.setState({vraag: VragenStore.getVraag("DRIE_ZES_NEGEN", volgendNummer)});
    };

    vorigeVraag = (event) => {
        var vorigNummer = this.state.vraag.nummer - 1;
        this.setState({vraag: VragenStore.getVraag("DRIE_ZES_NEGEN", vorigNummer)});
    };

    render() {
        return (
            <div>
                <DrieZesNegen
                    vraag={this.state.vraag}
                    onVolgendeVraag={this.volgendeVraag}
                    onVorigeVraag={this.vorigeVraag}
                    vorige="home"
                    volgende="opendeur"
                />
            </div>
        );
    }
}

export default DrieZesNegenController;