import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

//Action creator
const SpelerActions = {
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
    }
};

export default SpelerActions;