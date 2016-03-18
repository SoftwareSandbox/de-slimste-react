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
                    score: 60
                },
                {
                    naam: spelers[1],
                    score: 60
                },
                {
                    naam: spelers[2],
                    score: 60
                }
            ]
        });
    },

    secondeMinder: function(index){
        Dispatcher.dispatch({
            actionType:ActionTypes.SECONDE_MINDER,
            spelerIndex: index
        })
    }
};

export default SpelerAction; 