import React from 'react';
import './App.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from '../components/signup/signup';
import Login from '../components/login/login';
import NavbarPage from '../components/navigation/navigationBar';
import { history } from '../utils/history';
import { alertActions } from '../redux/actions/alertActions';
import { PrivateRoute } from '../components/privateRoute/index';
import HomePage from '../components/homepage/homepage';


class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
        // clear alert on location change
        this.props.clearAlerts();
    });
  }
  
  render(){
    const { alert } = this.props;
    return (
      <div>
          <Router history={history}>
              <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Redirect from="*" to="/" />
              </Switch>
          </Router>
      </div>
    );
  }
}


function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
