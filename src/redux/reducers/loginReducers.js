import { userConstants } from '../constants/userConstants';

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE  } = userConstants;

const initialState = { };

export default function(state = initialState, action){
    switch(action.type) {
        case LOGIN_REQUEST:
            console.log('requesting...')
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            console.log("success...", action.payload);
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case LOGIN_FAILURE:
            console.log('failed...', action.error);
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}