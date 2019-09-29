import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Signup from './components/signup/signup';
import Login from './components/login/login';

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/login/" component={Login} />
                <Route path="/signup/" component={Signup} />
            </div>
        </Router>
    </Provider>
  )

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
