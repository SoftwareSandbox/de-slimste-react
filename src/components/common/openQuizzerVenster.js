import React, {Component} from 'react';
import {Link} from 'react-router';
import QuizzerStartPage from '../pages/quizzer/quizzerStartPage';

var quizzerWindow;

class OpenQuizzerVenster extends Component {

    openQuizzerVenster(){
      quizzerWindow = window.open("#/quizzer", "Quizzers");
    }

    sendMessage(){
        if(quizzerWindow){
            quizzerWindow.postMessage({name: "TEST", message: "Hallo kindjes"}, "*");
        }
    }

    render() {
        return (
            <div>
                <a target="_blank" onClick={this.openQuizzerVenster}>open child</a>
                <button type="button" onClick={this.sendMessage}>send msg</button>
            </div>
        );
    }
}

export default OpenQuizzerVenster; 