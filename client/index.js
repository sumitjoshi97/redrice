import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import routes from './routes';


const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);
render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('app')
);

//render(<BrowserRouter routes={ routes } />, document.getElementById('app'));