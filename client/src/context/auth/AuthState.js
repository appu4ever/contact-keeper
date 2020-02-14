import React ,{ useReducer } from 'react'
import uuid from 'uuid'
import authReducer from './authReducer'
import authContext from './authContext'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../Types'

const AuthState = props => {
    const initialState= {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    // Load user : Check which user is logged in

    // Register user 

    // Login user

    //Logout

    // Clear errors
    return (
        <authContext.Provider value = {{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user
        }}>
            { props.children }
        </authContext.Provider>
    )
}

export default AuthState