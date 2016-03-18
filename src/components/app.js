import $ from 'jquery';
import jQuery from 'jquery';
import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;