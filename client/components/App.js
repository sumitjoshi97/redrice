import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Main from './Main';

class App extends Component {

    render() {
        return (
            <div className="container">
                <NavigationBar />
                <Main />
                
            </div>
        );
    }
}

export default App;