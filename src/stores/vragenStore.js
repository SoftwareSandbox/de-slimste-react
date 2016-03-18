import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import {EventEmitter} from 'events';
import _ from 'lodash';
const CHANGE_EVENT = 'change';
let _vragen = [
    {
        nummer: 0,
        type: "DRIE_ZES_NEGEN",
        vraag: "Wie ben ik?",
        antwoord: "Spongebob!"
    },
    {
        nummer: 1,
        type: "DRIE_ZES_NEGEN",
        vraag: "Wat doe ik van beroep?",
        antwoord: "Hamburgers bakken!"
    }
];
const VragenStore = Object.assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getPuzzel: (puzzelNummer) => {
        const puzzels = [
            [
                {
                    hints: ["Temptation island", "Jean-Paul Belmondo", "Playmate", "West-Vlaamse"],
                    antwoord: "Barbara Gandolfini"
                },
                   {
                    hints: ["Premier", "Benjamin", "Israel", "Likoed"],
                    antwoord: "Netanyahu"
                },
                   {
                    hints: ["Vastbinden", "Indianen", "Versieringen", "Boomstam"],
                    antwoord: "Totempaal"
                }
            ],
            [
                {
                    hints: ["Cassablanca", "Zweden", "Rosse linie", "Actrice"],
                    antwoord: "Ingmar Bergman"
                },
                   {
                    hints: ["Citroen", "Mexicaans", "zout", "Sunrise"],
                    antwoord: "Tequilla"
                },
                   {
                    hints: ["Worst", "Mosterd", "Zuurkool", "Ketchup"],
                    antwoord: "Hot dog"
                }
            ],
            [
                {
                    hints: ["Duet", "Mievis kopieert", "Relatiebemiddelaar", "Rika"],
                    antwoord: "Ponnet"
                },
                   {
                    hints: ["Letsel", "Nek", "Van voor naar achter", "Zweepslag"],
                    antwoord: "Whiplash"
                },
                   {
                    hints: ["Hello!", "Is it me", "You are looking for", "Zanger"],
                    antwoord: "Lionel Ritchie"
                }
            ]
        ];
        return puzzels[puzzelNummer];
    },

    getVraag: (type, nummer) => {
        return _vragen[nummer];
    },

    hasVolgendeVraag: (type, nummer) => {
      return _vragen[nummer + 1] !== undefined;
    },

    hasVorigeVraag: (type, nummer) => {
        return _vragen[nummer - 1] !== undefined;
    }

    //TOEVOEGEN AAN PAGES DIE DE SPELERS NODIG HEBBEN: _onChange, componentWillMount, componentWillUnmount
    // _onChange() {
    //     this.setState({spelers: VragenStore.getSpelers()});
    // }

    // componentWillMount() {
    //     VragenStore.addChangeListener(this._onChange.bind(this));
    // }

    // componentWillUnmount() {
    //     VragenStore.removeChangeListener(this._onChange.bind(this));
    // }

    // getAuthorById: (id) => {
    //     return _.find(_spelers, {id: id});
    // }

});

Dispatcher.register((action) => {
    switch(action.actionType) {
        default:
        //do nothing
    }
});

export default VragenStore;