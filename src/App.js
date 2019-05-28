import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Auth from './Auth'

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Auth}/>
            </div>
        );
    }
}

export default App;