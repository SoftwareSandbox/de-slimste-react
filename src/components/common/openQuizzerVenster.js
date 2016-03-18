import React, {Component} from 'react';

class OpenQuizzerVenster extends Component {

    openQuizzerVenster(){
      const quizzerWindow = window.open("/quizzer", "Quizzers");
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.openQuizzerVenster}>Open quizzer view</button>
            </div>
        );
    }
}

export default OpenQuizzerVenster; 