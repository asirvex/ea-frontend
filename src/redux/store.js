import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../redux/reducers';


const initialState = {};

const middleware = [thunkMiddleware, ]

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
); 