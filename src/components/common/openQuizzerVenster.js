import React, {Component} from 'react';
import {Link} from 'react-router';
import Popout from 'react-popout';
import QuizzerStartPage from '../pages/quizzer/quizzerStartPage';

class OpenQuizzerVenster extends Component {

    openQuizzerVenster(){
      const quizzerWindow = window.open(this.makeHref("quizzer"), "Quizzers");
    }

    render() {
        return (
            <div>
                <Popout url='quizzer.html' title='Window title' onClosing={this.popupClosed}>
                    <QuizzerStartPage />
                </Popout>
            </div>
        );
    }
}

export default OpenQuizzerVenster; 