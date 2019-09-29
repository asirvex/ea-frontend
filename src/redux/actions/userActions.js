import { userConstants } from '../constants/userConstants';
import Signup from '../../components/signup/signup';

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } = userConstants;

export const loginRequest = () => dispatch => {
    dispatch({type: LOGIN_REQUEST})
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        }))
        .catch(err => dispatch({
            type: LOGIN_FAILURE,
            error: err
        }))
}

export const signupRequest = signupData => dispatch => {
    dispatch({
        type: SIGNUP_REQUEST
    })
    fetch('https://essay-arena.herokuapp.com/api/auth/signup', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(signupData)
    })
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: data
        }))
}
