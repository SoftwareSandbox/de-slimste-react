import React, {Component} from 'react';
import ParentWindowEventListener from '../../common/parentWindowEventListener';

class QuizzerStartPage extends Component {

	constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        this.state = {
            testBericht: "Nog geen signaal gekregen van parent"
        };
    }

    processBericht(event){
        if(event.data.name === "TEST"){
            this.setState({testBericht: event.data.message});
        }
    }

    render() {
        return (
            <div>
                <ParentWindowEventListener callback={this.processBericht.bind(this)} />
                <p>Welcome quizzers!</p>
                <p>{this.state.testBericht}</p>
            </div>

        );
    }
}

export default QuizzerStartPage;