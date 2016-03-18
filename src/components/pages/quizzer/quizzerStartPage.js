import React, {Component} from 'react';

class QuizzerStartPage extends Component {

	constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
    }


    render() {
        return (
            <div>
                Welcome quizzers!
            </div>
        );
    }
}

export default QuizzerStartPage;