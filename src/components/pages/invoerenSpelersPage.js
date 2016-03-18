import React, {Component} from 'react';
import {Navigation, browserHistory} from 'react-router';
import Toastr from 'toastr';
import SpelerAction from '../../actions/spelerAction';

import TextInput from '../common/textInput.js';

class InvoerenSpelersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spelers: ['', '', ''],
            aangepast: false
        };
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
        let waardeX = this.state.spelers[veld];
        let x = 0;
        this.setState({
            spelers: [this.state.spelers[0], this.state.spelers[1], this.state.spelers[2]],
            aangepast: true
        });
    };


    bewaarSpelers = (event) => {
        event.preventDefault();
        if(this.spelerNamenGeldig()) { //TODO Aaron: spelers opslaan in store
            SpelerAction.createSpelers(this.state.spelers);
            Toastr.success('spelers opgeslagen');
            this.setState({aangepast: false});
            // the router is now built on reactjs/history, and it is a first class API in the router for navigating
            browserHistory.push('driezesnegen');
        }
    };

    spelerNamenGeldig() {
        let geldigeNamen = true;
        this.state.errors = ['', '', ''];

        for (let i = 0; i < this.state.spelers.length; i++) {
            if(this.state.spelers[i].length === 0) {
                this.state.errors[i] = "Geen lege naam toegestaan";
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
                <TextInput
                    name="0"
                    value={this.state.spelers[0]}
                    onChange={this.setSpelersState}
                    placeholder="Speler 1"
                    error=''//{this.state.errors.speler1}
                    af={true}
                />

                <TextInput
                    name="1"
                    value={this.state.spelers[1]}
                    onChange={this.setSpelersState}
                    placeholder="Speler 2"
                    error=''//{this.state.errors.speler2}
                    af={true}
                />

                <TextInput
                    name="2"
                    value={this.state.spelers[2]}
                    onChange={this.setSpelersState}
                    placeholder="Speler 3"
                    error=''//{this.state.errors.speler3}
                    af={true}
                />

                <input type="button" value="Start de quiz" className="slimsteQuizConfiguratie" onClick={this.bewaarSpelers}/>
            </form>
            </div>
        );
    }
}

export default InvoerenSpelersPage;