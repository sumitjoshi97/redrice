import React from 'react';
import { Route, Switch } from 'react-router';
import App from './App';
import SignupPage from './signup/SignupPage';
import Greetings from './Greetings';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Greetings} />
                    <Route path='/signup' component={SignupPage} />
                </Switch>
            </main>
        )
    }
}

/*
export default (
    <Route path="/" component={App} >
        <IndexRoute component={Greetings} />
        <Route path='signup' component={SignupPage} />
    </Route>
)*/

export default Main;