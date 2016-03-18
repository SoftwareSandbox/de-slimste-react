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
            spelerInputs: [
                {key: "0", naam: '', placeholder: 'Speler 1', error: ''},
                {key: "1", naam: '', placeholder: 'Speler 2', error: ''},
                {key: "2", naam: '', placeholder: 'Speler 3', error: ''}
            ]
        };
    }

    _onChange() {
        this.setState({spelerInputs: SpelerStore.getSpelers()});
    }

    componentWillMount() {
        SpelerStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        SpelerStore.removeChangeListener(this._onChange.bind(this));
    }

    createSpelerUpdateHandler(speler) {
        return (event) => {
            speler.naam = event.target.value;
            this.setState({ spelerInputs: this.state.spelerInputs });
        };
    }

    createSubmitHandler() {
        return (event) => {
            event.preventDefault();
            if (this.spelerNamenGeldig()) { 
                SpelerAction.createSpelers(this.state.spelerInputs.map((speler) => {
                    return {
                        key: speler.key,
                        naam: speler.naam,
                        score: 60
                    };
                }));
                Toastr.success('spelers opgeslagen');
                // the router is now built on reactjs/history, and it is a first class API in the router for navigating
                browserHistory.push('driezesnegen');
            }
        };
    }

    spelerNamenGeldig() {
        let updatedSpelerInputs = this.state.spelerInputs
            .map((speler) => {
                speler.error = !speler.naam ? 'Geen lege naam toegestaan' : '';
                return speler;
            });
        this.setState({ spelerInputs: updatedSpelerInputs });
        return this.state.spelerInputs.filter((speler) => speler.error).length === 0;
    }

    render() {
        return (
            <div>
                <h1>Voer de namen van de spelers in!</h1>
                <form>
                    {this.state.spelerInputs.map((speler) => {
                        return <TextInput
                            key={speler.key}
                            value={speler.naam}
                            onChange={this.createSpelerUpdateHandler(speler)}
                            placeholder={speler.placeholder}
                            error={speler.error}
                            autoFocus={speler.key === "0"}
                        />;
                    })}

                    <input type="button" value="Start de quiz" className="slimsteQuizConfiguratie" onClick={this.createSubmitHandler()}/>
                </form>
            </div>
        );
    }
}

export default InvoerenSpelersPage;