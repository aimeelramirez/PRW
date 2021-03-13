import React, { useReducer } from 'react';
import * as actionTypes from './action/action';
import Button from '../components/button/button'
const initialState = {
    username: "",
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
                username: "",
                isAuth: false
            };
        default:
            return state;
    }
}
const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleLogin = () => {
        dispatch({
            type: actionTypes.LOGIN_USER,
            payload: {
                user: "Aimee"
            }
        })
    }
    const handleLogout = () => {
        dispatch({
            type: actionTypes.LOGOUT_USER,
        })
    }

    return (
        <div>
            <p>Current User: {state.user} </p>
            <p>Auth: {JSON.stringify(state.isAuth)} </p>
            <div onClick={handleLogin}>
                <div>Login</div>
                <Button>Login</Button>
            </div>
            <br />
            <div onClick={handleLogout}>
                <div>Logout</div>
                <Button><div>Logout</div> </Button>
            </div>
        </div>
    )
}
export default Reducer