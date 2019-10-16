import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { App } from './App/App';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import NavbarPage from './components/navigation/navigationBar';

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/login/" component={Login} />
                <Route path="/signup/" component={Signup} />
                <Route path="/navbar" component={NavbarPage} />
            </div>
        </Router>
    </Provider>
  )

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
