import React, {Component} from 'react';
import {Link} from 'react-router';
import QuizzerStartPage from '../pages/quizzer/quizzerStartPage';

class OpenQuizzerVenster extends Component {

    openQuizzerVenster(){
      const quizzerWindow = window.open("#/quizzer", "Quizzers");
    }

    render() {
        return (
            <div>
                <a target="_blank" onClick={this.openQuizzerVenster}>open child</a>
            </div>
        );
    }
}

export default OpenQuizzerVenster; 