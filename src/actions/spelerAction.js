import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

//Action creator
const SpelerAction = {
    createSpelers: function(spelers) {
        
        //Action
        Dispatcher.dispatch({
            actionType: ActionTypes.MAAK_SPELERS,
            spelers: spelers
        });
    },

    updateTijd: function(index, nieuweTijd){
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_TIJD,
            spelerIndex: index,
            tijd: nieuweTijd
        });
    },

    volgendeSpeler: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.VOLGENDE_SPELER
        });
    },

    startTimer: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.START_TIMER
        });
    },

    stopTimer: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.STOP_TIMER
        });
    }
};

export default SpelerAction; 