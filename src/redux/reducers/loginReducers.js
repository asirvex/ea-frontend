import { userConstants } from '../constants/userConstants';

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE  } = userConstants;

const initialState = { };

export default function(state = initialState, action){
    switch(action.type) {
        case LOGIN_REQUEST:
            console.log('.....failed')
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case LOGIN_FAILURE:
            console.log('thison', action.error);
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}