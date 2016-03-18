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
            spelers: [
                {key: "0", naam: '', placeholder: 'Speler 1', error: ''},
                {key: "1", naam: '', placeholder: 'Speler 2', error: ''},
                {key: "2", naam: '', placeholder: 'Speler 3', error: ''}
            ]
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

    updateSpelersState = (event) => {
        let veld = event.target.name,
            waarde = event.target.value;
        let nieuweSpelers = this.state.spelers
            .map((speler) => {
                if (speler.key === veld){
                    speler.naam = waarde;
                }
                return speler;
            });
        this.setState({
            spelers: nieuweSpelers
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
        this.state.spelers
            .forEach((speler) => {
                speler.error = !speler.name ? 'Geen lege naam toegestaan' : '';
            });
        return this.state.spelers
            .filter((speler) => {
                return speler.error;
            }).length > 1;
    }

    render() {
        return (
            <div>
                <h1>Voer de namen van de spelers in!</h1>
                <form>
                    {this.state.spelers.map((speler) => {
                        return <TextInput
                            key={speler.key}
                            name={speler.key}
                            value={speler.naam}
                            onChange={this.updateSpelersState}
                            placeholder={speler.placeholder}
                            error={speler.error}
                            autoFocus={speler.key === 0}
                        />;
                    })}

                    <input type="button" value="Start de quiz" className="slimsteQuizConfiguratie" onClick={this.bewaarSpelers}/>
                </form>
            </div>
        );
    }
}

export default InvoerenSpelersPage;