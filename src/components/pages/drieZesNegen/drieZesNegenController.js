import React, {Component} from 'react';
import DrieZesNegen from './drieZesNegenPage';
import SpelerStore from '../../../stores/spelerStore';
import VragenStore from '../../../stores/vragenStore';

class DrieZesNegenController extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        this.state = {
            spelers: SpelerStore.getSpelers(),
            vraag: VragenStore.getVraag("DRIE_ZES_NEGEN", 0)
        };
    }

    _onChange() {
        console.log('onChange');
        this.setState({spelers: SpelerStore.getSpelers()});
    }

    componentWillMount() {
        console.log('CWM');
        SpelerStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        console.log('CWU');
        SpelerStore.removeChangeListener(this._onChange.bind(this));
    }

    volgendeVraag = (event) => {
        //this.setState({vraag: VragenStore.getVraag("DRIE_ZES_NEGEN", this.props.vraag.nummer + 1)});
    };

    render() {
        return (
            <div>
                <DrieZesNegen spelers={this.state.spelers} vraag={this.state.vraag} vorige="home" volgende="opendeur" onVolgendeVraag={this.volgendeVraag}/>
            </div>
        );
    }
}

export default DrieZesNegenController;