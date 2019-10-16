import { combineReducers } from 'redux';
import loginReducer from './loginReducers';
import { alertReducer } from './alertReducers';

export default combineReducers({
    login: loginReducer,
    alert: alertReducer
})