import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

//Action creator
const SpelerAction = {
    createSpelers: function(spelers) {
        
        //Action
        Dispatcher.dispatch({
            actionType: ActionTypes.MAAK_SPELERS,
            spelers: [
                {
                    naam: spelers[0],
                    score: 60,
                    key: 0
                },
                {
                    naam: spelers[1],
                    score: 60,
                    key: 1
                },
                {
                    naam: spelers[2],
                    score: 60,
                    key: 2
                }
            ]
        });
    },

    updateTijd: function(index, nieuweTijd){
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_TIJD,
            spelerIndex: index,
            tijd: nieuweTijd
        });
    }
};

export default SpelerAction; 