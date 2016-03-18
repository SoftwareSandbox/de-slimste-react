import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import {EventEmitter} from 'events';
import _ from 'lodash';
const CHANGE_EVENT = 'change';

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

    getVraag: (type, nummer) => {
        const vragen = [
            {
                nummer: 1,
                vraag: "Wie ben ik?",
                antwoord: "Spongebob!"
            },
            {
                nummer: 2,
                vraag: "Wat doe ik van beroep?",
                antwoord: "Hamburgers bakken!"
            }
        ];
        return vragen[nummer];
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