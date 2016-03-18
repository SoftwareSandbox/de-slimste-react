import React, {Component} from 'react';
import DrieZesNegen from './drieZesNegenPage';
import VragenStore from '../../../stores/vragenStore';
import SpelerAction from '../../../actions/spelerAction';

class DrieZesNegenController extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        this.state = {
            vraag: VragenStore.getVraag("DRIE_ZES_NEGEN", 0),
            hasVolgendeVraag: VragenStore.hasVolgendeVraag("DRIE_ZES_NEGEN", 0),
            hasVorigeVraag: VragenStore.hasVorigeVraag("DRIE_ZES_NEGEN", 0)
        };
    }

    volgendeVraag = (event) => {
        var volgendNummer = this.state.vraag.nummer + 1;
        var volgendeVraag = VragenStore.getVraag("DRIE_ZES_NEGEN", volgendNummer);
        var hasVolgendeVraag = VragenStore.hasVolgendeVraag("DRIE_ZES_NEGEN", volgendNummer);
        var hasVorigeVraag = VragenStore.hasVorigeVraag("DRIE_ZES_NEGEN", volgendNummer);
        this.setState({
            vraag: volgendeVraag,
            hasVolgendeVraag: hasVolgendeVraag,
            hasVorigeVraag: hasVorigeVraag
        });
    };

    vorigeVraag = (event) => {
        var vorigNummer = this.state.vraag.nummer - 1;
        var vorigeVraag = VragenStore.getVraag("DRIE_ZES_NEGEN", vorigNummer);
        var hasVolgendeVraag = VragenStore.hasVolgendeVraag("DRIE_ZES_NEGEN", vorigNummer);
        var hasVorigeVraag = VragenStore.hasVorigeVraag("DRIE_ZES_NEGEN", vorigNummer);
        this.setState({
            vraag: vorigeVraag,
            hasVolgendeVraag: hasVolgendeVraag,
            hasVorigeVraag: hasVorigeVraag
        });
    };

    vraagJuist = (event) => {
        var isDrieZesOfNegen = ((this.state.vraag.nummer + 1) % 3) === 0;
        if(isDrieZesOfNegen){
            SpelerAction.addScoreHuidigeSpeler(10);
        }
    };

    render() {
        return (
            <div>
                <DrieZesNegen
                    vraag={this.state.vraag}
                    onVolgendeVraag={this.volgendeVraag}
                    onVorigeVraag={this.vorigeVraag}
                    hasVolgendeVraag={this.state.hasVolgendeVraag}
                    hasVorigeVraag={this.state.hasVorigeVraag}
                    onVraagJuist={this.vraagJuist}
                    vorige="home"
                    volgende="opendeur"
                />
            </div>
        );
    }
}

export default DrieZesNegenController;