import React, {Component} from 'react';
import ParentWindowEventListener from '../../common/parentWindowEventListener';
import SpelerAction from '../../../actions/spelerAction';
import Commands from '../../../constants/childWindowCommands';
import SpelersFooter from '../../common/spelersFooter';

class QuizzerStartPage extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        this.state = {};
        window.opener.synchronizeerVensters();
    }

    processBericht(event) {
        console.log(event);
        if (event.data.name === Commands.INITIALIZEER_SPELERS) {
            SpelerAction.initializeerSpelers(event.data.spelers, event.data.geselecteerdeSpeler);
        }
    }

    click() {
        console.log(window.opener);
        window.opener.sendMessage();
    }

    render() {
        return (
            <div>
                <ParentWindowEventListener callback={this.processBericht.bind(this)}/>
                <SpelersFooter />
            </div>

        );
    }
}

export default QuizzerStartPage;