import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    LoginPage,
    MainPage
} from 'containers';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/main" component={MainPage} />
                </Switch> 
            </div>
        );
    }
}

export default App;