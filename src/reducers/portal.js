import React, { useReducer } from 'react';
import * as actionTypes from './action/action';
import Button from '../components/button/button'
const initialState = {
    user: "",
    isAuth: false,
}
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                user: action.payload.user,
                isAuth: true
            };
        case actionTypes.LOGOUT_USER:
            return {
                user: "",
                isAuth: false
            };
        default:
            return state;
    }
}
const Portal = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const switchLogin = () => {
        if (state.isAuth === false) {
            dispatch({
                type: actionTypes.LOGIN_USER,
                payload: {
                    user: "User"
                }
            })
        } else {
            dispatch({
                type: actionTypes.LOGOUT_USER,
            })
        }
    }

    return (
        <div>
            <div className="login-portal">
                <div onClick={switchLogin}>
                    <Button>Login</Button>
                </div>
            </div>
            <p>{state.isAuth ? "Welcome, " + state.user + "!" : "Please sign in first!"} </p>
            <p>Auth: {JSON.stringify(state.isAuth)} </p>
        </div>
    )
}

export default Portal