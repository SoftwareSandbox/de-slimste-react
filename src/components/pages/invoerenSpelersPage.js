import React, {Component} from 'react';
import {Navigation, browserHistory} from 'react-router';
import Toastr from 'toastr';
import SpelerAction from '../../actions/spelerAction';
import SpelerStore from '../../stores/spelerStore';

import TextInput from '../common/textInput.js';

class InvoerenSpelersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spelers: [],
            errors: []
        };
    }

    _onChange() {
        this.setState({spelers: SpelerStore.getSpelers()});
    }

    componentWillMount() {
        SpelerStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        SpelerStore.removeChangeListener(this._onChange.bind(this));
    }

    static willTransitionFrom(transition, component) {
        if(component.state.aangepast && !confirm('De pagina verlaten zonder spelers op te slaan?')) {
            transition.abort();
        }
    }

    setSpelersState = (event) => {
        let veld = event.target.name,
            waarde = event.target.value;
        this.state.spelers[veld] = waarde;
        this.setState({
            spelers: [this.state.spelers[0], this.state.spelers[1], this.state.spelers[2]]
        });
    };

    bewaarSpelers = (event) => {
        event.preventDefault();
        if(this.spelerNamenGeldig()) { //TODO Aaron: spelers opslaan in store
            SpelerAction.createSpelers(this.state.spelers);
            Toastr.success('spelers opgeslagen');
            // the router is now built on reactjs/history, and it is a first class API in the router for navigating
            browserHistory.push('driezesnegen');
        }
    };

    spelerNamenGeldig() {
        let geldigeNamen = true;
        this.state.errors = [];

        for (let spelerIndex in this.state.spelers) {
            if(!this.state.spelers[spelerIndex]) {
                this.state.errors[spelerIndex] = "Geen lege naam toegestaan";
                geldigeNamen = false;
            }
        }

        this.setState({errors: this.state.errors});
        return geldigeNamen;
    }

    render() {
        return (
            <div>
                <h1>Voer de namen van de spelers in!</h1>
                <form>
                    {this.state.spelers.map((speler) => {
                        return <TextInput
                            name="0"
                            value={speler}
                            onChange={this.setSpelersState}
                            placeholder="Speler 1"
                            error={this.state.errors[0]}
                            autoFocus={true}
                        />;
                    })}

                    <TextInput
                        name="1"
                        value={this.state.spelers[1]}
                        onChange={this.setSpelersState}
                        placeholder="Speler 2"
                        error={this.state.errors[1]}
                        autoFocus={false}
                    />

                    <TextInput
                        name="2"
                        value={this.state.spelers[2]}
                        onChange={this.setSpelersState}
                        placeholder="Speler 3"
                        error={this.state.errors[2]}
                        autoFocus={false}
                    />

                    <input type="button" value="Start de quiz" className="slimsteQuizConfiguratie" onClick={this.bewaarSpelers}/>
                </form>
            </div>
        );
    }
}

export default InvoerenSpelersPage;