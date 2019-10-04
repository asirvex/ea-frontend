import { userConstants } from '../constants/userConstants';
import Signup from '../../components/signup/signup';
import axios from '../../utils/httpRequests'

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } = userConstants;

export const loginRequest = loginData => dispatch => {
    dispatch({type: LOGIN_REQUEST})
    axios.post(`/api/auth/login/`, loginData )
        .then(response => {
            console.log('response', response);
        }, error => {
            console.log('error', error.response);
        })
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
