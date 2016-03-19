import React, {Component} from 'react';

class ParentWindowEventListener extends Component {

    constructor(props, context) {
        super(props, context); //It's very important to pass context to super() so that the router will work
        window.addEventListener("message", this.props.callback, false);
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default ParentWindowEventListener;