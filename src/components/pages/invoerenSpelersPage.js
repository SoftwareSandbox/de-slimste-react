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
            spelers: {
                speler1: '',
                speler2: '',
                speler3: ''
                
            },
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
            spelers: this.state.spelers,
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
        this.state.errors = {
                                speler1: '',
                                speler2: '',
                                speler3: ''
                            };

        if(this.state.spelers.speler1.length === 0) {
            this.state.errors.speler1 = "Geen lege naam toegestaan";
            geldigeNamen = false;
        }
        if(this.state.spelers.speler2.length === 0) {
            this.state.errors.speler2 = "Geen lege naam toegestaan";
            geldigeNamen = false;
        }
        if(this.state.spelers.speler3.length === 0) {
            this.state.errors.speler3 = "Geen lege naam toegestaan";
            geldigeNamen = false;
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
                    <h1>Manage spelers</h1>
                    <form>
                    <TextInput
                        name="speler1"
                        label="Speler 1"
                        value={this.state.spelers.speler1}
                        onChange={this.setSpelersState}
                        placeholder="Speler 1"
                        error=''//{this.state.errors.speler1}
                        af={true}
                    />

                    <TextInput
                        name="speler2"
                        label="Speler 2"
                        value={this.state.spelers.speler2}
                        onChange={this.setSpelersState}
                        placeholder="Speler 2"
                        error=''//{this.state.errors.speler2}
                        af={true}
                    />

                    <TextInput
                        name="speler3"
                        label="Speler 3"
                        value={this.state.spelers.speler3}
                        onChange={this.setSpelersState}
                        placeholder="Speler 3"
                        error=''//{this.state.errors.speler3}
                        af={true}
                    />

                    <input type="submit" value="Start de quiz" className="btn btn-default" onClick={this.bewaarSpelers}/>
                </form>
                </div>
            );
    }
}

export default InvoerenSpelersPage;