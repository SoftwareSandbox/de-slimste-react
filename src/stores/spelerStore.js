import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let _spelers = {spelers: [], geselecteerdeSpelerIndex: 0};

const SpelerStore = Object.assign({}, EventEmitter.prototype, {


    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getSpelers: () => {
        return _spelers.spelers;
    },

    getGeselecteerdeSpelerIndex: () => {
        return _spelers.geselecteerdeSpelerIndex;
    },

    secondeMinder: (index) => {
        _spelers.spelers[index].score = _spelers.spelers[index].score - 1;
    },

    updateTijd: (index, tijd) => {
        _spelers.spelers[index].score = tijd;
    },

    addScoreHuidigeSpeler: (score) => {
        var huidigeSpeler = _spelers.spelers[_spelers.geselecteerdeSpelerIndex];
        huidigeSpeler.score = huidigeSpeler.score + score;
    },

    selecteerSpeler: (index) => {
        _spelers.spelers[_spelers.geselecteerdeSpelerIndex].geselecteerd = false;
        _spelers.geselecteerdeSpelerIndex = index;
        _spelers.spelers[_spelers.geselecteerdeSpelerIndex].geselecteerd = true;
    },

    getTimerGestart: () => {
        return _spelers.timer;
    },

    startTimer: () => {
        _spelers.timer = true;
    },

    stopTimer: () => {
        _spelers.timer = false;
    }
});

Dispatcher.register((action) => {


    switch (action.actionType) {
        case ActionTypes.MAAK_SPELERS:
            _spelers.spelers = action.spelers;
            SpelerStore.selecteerSpeler(0);
            SpelerStore.emitChange();
            break;
        case ActionTypes.INITIALIZEER_SPELERS:
            _spelers.spelers = action.spelers;
            SpelerStore.selecteerSpeler(action.geselecteerdeSpeler);
            SpelerStore.emitChange();
            break;
        // case ActionTypes.SECONDE_MINDER:
        //     SpelerStore.secondeMinder(action.spelerIndex);
        //     SpelerStore.emitChange();
        //     break;
        case ActionTypes.UPDATE_TIJD:
            SpelerStore.updateTijd(action.spelerIndex, action.tijd);
            SpelerStore.emitChange();
            break;
        case ActionTypes.ADD_SCORE_HUIDIGE_SPELER:
            SpelerStore.addScoreHuidigeSpeler(action.score);
            SpelerStore.emitChange();
            break;
        case ActionTypes.VOLGENDE_SPELER:
            SpelerStore.selecteerSpeler((_spelers.geselecteerdeSpelerIndex + 1) % _spelers.spelers.length);
            SpelerStore.emitChange();
            break;
        case ActionTypes.START_TIMER:
            SpelerStore.startTimer();
            SpelerStore.emitChange();
            break;
        case ActionTypes.STOP_TIMER:
            SpelerStore.stopTimer();
            SpelerStore.emitChange();
            break;
        default:
        //do nothing
    }
});

export default SpelerStore;


/* TOEVOEGEN AAN PAGES DIE DE SPELERS NODIG HEBBEN: _onChange, componentWillMount, componentWillUnmount
 * _onChange() {
 *     this.setState({spelers: SpelerStore.getSpelers()});
 * }

 * componentWillMount() {
 *     SpelerStore.addChangeListener(this._onChange.bind(this));
 * }

 * componentWillUnmount() {
 *     SpelerStore.removeChangeListener(this._onChange.bind(this));
 * }

 * getAuthorById: (id) => {
 *     return _.find(_spelers, {id: id});
 * }
 */