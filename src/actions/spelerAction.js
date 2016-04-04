import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

//Action creator
const SpelerAction = {
    createSpelers: function (spelers) {

        //Action
        Dispatcher.dispatch({
            actionType: ActionTypes.MAAK_SPELERS,
            spelers: spelers
        });
    },

    initializeerSpelers: function (spelers, geselecteerdeSpeler) {
        console.log("Initializing!");
        console.log(spelers);
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZEER_SPELERS,
            spelers: spelers,
            geselecteerdeSpeler: geselecteerdeSpeler
        });
    },

    updateTijd: function (index, nieuweTijd) {
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_TIJD,
            spelerIndex: index,
            tijd: nieuweTijd
        });
    },

    addScoreHuidigeSpeler: function (score) {
        Dispatcher.dispatch({
            actionType: ActionTypes.ADD_SCORE_HUIDIGE_SPELER,
            score: score
        });
    },

    volgendeSpeler: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.VOLGENDE_SPELER
        });
    },

    startTimer: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.START_TIMER
        });
    },

    stopTimer: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.STOP_TIMER
        });
    }
};

export default SpelerAction; 