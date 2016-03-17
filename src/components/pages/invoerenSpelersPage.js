import React, {Component} from 'react';
import {Navigation} from 'react-router';
import toastr from 'toastr';

import TextInput from '../common/textInput.js';

class InvoerenSpelersPage extends Component {
    //We don't get mixins in es6!  Pull in the contextTypes static
    //to get access to the router
    static contextTypes = {
        router: React.PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
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
            // if(this.state.spelers.id) {
            //     SpelerAction.spelerAanpassen(this.state.spelers);
            // } else {
            //     SpelerAction.spelerAanmaken(this.state.spelers);
            // }
            toastr.success('spelers opgeslagen');
            this.setState({aangepast: false});
            this.context.router.transitionTo('driezesnegen'); //TODO: routing fixen
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

    componentWillMount() {
        // this.setState({
        //     spelers: spelersStore.getSpelers() //TODO: store
        // });
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